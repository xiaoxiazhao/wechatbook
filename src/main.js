// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import vueTap from './directive/vue-tap'
// import CxltToastr from './components/components/toast'
// import Loading from './components/components/loading'
import http from "./http"
import filter from './filter'
import directive from './directive'
import myPublic from './assets/js/common.js'

Vue.use(myPublic);
Vue.use(filter);
Vue.use(directive);
// Vue.use(Loading);
// Vue.use(CxltToastr);
Vue.use(vueTap);
Vue.prototype.$http = http;

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});