import Vue from 'vue'
import tap from '../assets/js/tap'
const directive = {};

const eventHash = {
  uv: "uv",
  click: "click"
};
directive.install = function(Vue) {
  Vue.directive('stat', {
    bind: function(el, binding, VNode) {
      const _arg = binding.arg,
        _value = binding.value,
        _userID = Vue.prototype.getCookie("userID"),
        _body = { 
          eventPrefix: "buybuybee",
          eventId: eventHash[_arg],
        },
        strify = JSON.stringify;
      if(_arg === "uv") {
        _body.eventValue = strify({
          userID: _userID,
          url: window.location.href
        });
        postRecord(_body);
      } else if(_arg === "click") {
        _body.eventValue = strify({
          userID: _userID,
          url: window.location.href,
          name: _value.name,
          action: _value.action
        });
        binding.click_callback = () => {
          postRecord(_body);
        }
        if(Vue.prototype.isPc()) {
          el.addEventListener("click", binding.click_callback, {passive: true}, false);
        } else {
          tap(el, binding.click_callback);
        }
      }
    },
    unbind: function(el, binding, VNode) {
      el.removeEventLister && el.removeEventLister("click", binding.click_callback);
    },
  });
}

function postRecord(body) {
  console.log(body);
  Vue.prototype.$http.post("/v1/data/recordData", body);
}

export default directive;
