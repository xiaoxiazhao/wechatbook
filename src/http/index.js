import Vue from 'vue'
import axios from 'axios'
import config from '../config'

const http = axios.create({
  baseURL: config.URL(),
});

// 拦截器，预处理response
http.interceptors.response.use(function (res) {
  const FULL = res.config.full;
  res = res.data;
  if(res && (res.code === 20000 || res.status && res.status.code === 20000)) {
  } else {
    if(!FULL) errorToast();
    res.error = true;
  }
  return res;
}, function (error) {
  errorToast();
  console.error(error);
});

// 自定义处理状态码的get/post/put/delete请求
const CONFIG = { full: true };
http.getFull = function(url, config) {
  config = Object.assign({}, config, CONFIG, { url, method: "get" });
  return http.request(config);
}
http.deleteFull = function(url, config) {
  config = Object.assign({}, config, CONFIG, { url, method: "delete" });
  return http.request(config);
}
http.postFull = function(url, data, config) {
  config = Object.assign({}, config, CONFIG, { url, data, method: "post" });
  return http.request(config);
}
http.putFull = function(url, data, config) {
  config = Object.assign({}, config, CONFIG, { url, data, method: "put" });
  return http.request(config);
}

http.all = axios.all;
http.spread = axios.spread;

// 通用报错toast
function errorToast() {
  Vue.prototype.$toast.warn({
    id: "request",
    message: "The server is busy, please try again later",
    unique: true
  });
}

export default http;