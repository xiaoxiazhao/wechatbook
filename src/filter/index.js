const filter = {};
filter.install = function(Vue) {
  Vue.filter('dateformat', function (value, fmt = "yyyy-MM-dd hh:mm:ss") {
    let date;
    if(Vue.prototype.iOS()) {
      date = createIOSDate(value);
    } else {
      date = new Date(value);
    }
    let o = {
      "M+" : date.getMonth()+1, //月份
      "d+" : date.getDate(), //日
      "h+" : date.getHours()%12 == 0 ? 12 : date.getHours()%12, //小时
      "H+" : date.getHours(), //小时
      "m+" : date.getMinutes(), //分
      "s+" : date.getSeconds(), //秒
      "q+" : Math.floor((date.getMonth()+3)/3), //季度
      "S" : date.getMilliseconds() //毫秒
    };
    let week = {
      "0" : "/u65e5",
      "1" : "/u4e00",
      "2" : "/u4e8c",
      "3" : "/u4e09",
      "4" : "/u56db",
      "5" : "/u4e94",
      "6" : "/u516d"
    };
    if(/(y+)/.test(fmt)){
      fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));
    }
    if(/(E+)/.test(fmt)){
      fmt=fmt.replace(RegExp.$1, ((RegExp.$1.length>1) ? (RegExp.$1.length>2 ? "/u661f/u671f" : "/u5468") : "")+week[date.getDay()+""]);
    }
    for(let k in o){
      if(new RegExp("("+ k +")").test(fmt)){
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
      }
    }
    return fmt;
  });

  Vue.filter('date', function (value) {
    let date;
    if(Vue.prototype.iOS()) {
      date = createIOSDate(value);
    } else {
      date = new Date(value);
    }
    const monthList = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Otc','Nov','Dec'];
    let res = `${date.getHours()}:${date.getMinutes()}, ${monthList[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    return res;
  });
};

function createIOSDate(value) {
  let date = new Date(0);
  value = value.split(".")[0].replace(/[-:]/g, " ").split(" ");
  date.setFullYear(value[0]);
  date.setMonth(value[1]-1);
  date.setDate(value[2]);
  date.setHours(value[3]);
  date.setMinutes(value[4]);
  date.setSeconds(value[5]);
  return date;
}

export { filter as default };
