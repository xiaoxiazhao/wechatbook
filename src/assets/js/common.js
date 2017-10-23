const common = {};
common.install = function(Vue) {
  // class
  Vue.prototype.addClass = function(el, className) {
    if(el.classList) {
      el.classList.add.apply(el.classList, className.split(" "));
    } else {
      el.className += " " + className;
    }
  };
  Vue.prototype.removeClass = function(el, className) {
    if(el.classList) {
      el.classList.remove.apply(el.classList, className.split(" "));
    } else {
      let reg = new RegExp("\\b" + className.split(" ").join("|") + "\\b", "g");
      el.className = el.className.replace(reg, "");
    }
  };
  // cookie
  Vue.prototype.setCookie = function(name, value, expires, domain, path, secure){
    let cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);
    if(expires) {
      switch (expires.constructor) {
        case Number:
        var date = new Date();
        date.setTime(date.getTime() + expires * 24 * 60 * 60 * 1000); //expires h后过期
        cookieText += "; expires=" + date.toGMTString();
        break;
        case Date:
        cookieText += "; expires=" + expires.toGMTString();
        break;
      }
    }
    if(path) {
      cookieText += "; path=" + path;
    }
    if(domain) {
      cookieText += "; domain=" + domain;
    }
    if(secure) {
      cookieText += "; secure=" + secure;
    }
    document.cookie = cookieText;
  };
  Vue.prototype.getCookie = function(name){
    let cookieName = encodeURIComponent(name) + "=",
    cookieStart = document.cookie.indexOf(cookieName),
    cookieValue = null;
    if (cookieStart > -1) {
      var cookieEnd = document.cookie.indexOf(";", cookieStart);
      if (cookieEnd == -1) {
        cookieEnd = document.cookie.length;
      }
      cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
    }
    return cookieValue;
  };
  Vue.prototype.clearCookie = function(name) {
      this.setCookie(name, "", 0);
  };
  // localStorage
  Vue.prototype.setItem = function(name, value) {
    if(!window.localStorage || !name || !value) return false;
    window.localStorage.setItem(name, JSON.stringify(value));
  }
  Vue.prototype.getItem = function(name) {
    if(!window.localStorage || !name) return false;
    return JSON.parse(window.localStorage.getItem(name));
  }
  // 正则
  Vue.prototype.REGEXP = {
    pwd: /^.{6,}$/,
    phone: /^\d{6,10}$/,
    zipcode: /^\d{5,10}$/,
    email: /^([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-]+)*@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-]+)+$/
  }
  // sleep
  Vue.prototype.$sleep = function(delay) {
    return new Promise(function(resolve) {
      setTimeout(() => {
        resolve();
      }, delay);
    });
  }
  // delay
  const LOADTIME = 500;
  Vue.prototype.$delay = function(promise) {
    return Promise.all([promise, Vue.prototype.$sleep(LOADTIME)]).then(res => res[0]);
  }
  Vue.prototype.$debounce = function(fn, delay) {
    let timer;
    return () => {
      clearTimeout(timer);
      timer = setTimeout(fn, delay);
    }
  }

  const UA = navigator.userAgent.toLowerCase();
  //const UA = 'iphone chrome'
  Vue.prototype.iOS = function() {
    return UA.indexOf("iphone") > -1;
  }
  Vue.prototype.android = function() {
    return UA.indexOf("android") > -1;
  }
  Vue.prototype.twitter = function(){
    return UA.indexOf("twitter") != -1;
  }
  Vue.prototype.fbios = function(){
    return UA.indexOf("fbios") != -1;
  }
  Vue.prototype.chrome = function(){
    return window.chrome;
  }
  Vue.prototype.isPc = function() {
    var agents = /android|iphone|windows phone|ipad|ipod/;
    return !agents.test(UA);
  }
};

export default common;
