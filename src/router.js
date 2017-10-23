import Vue from 'vue'
import VueRouter from 'vue-router';
import Home from "./components/Home";
import EditMenu from "./components/EditMenu";
import DateMenu from "./components/DateMenu";
import Revert from "./components/Revert";
import CoverDesign from "./components/CoverDesign";

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/editmenu', name: 'editmenu', component: EditMenu },
  { path: '/datemenu', name: 'datemenu', component: DateMenu },
  { path: '/revert', name: 'revert', component: Revert },
  { path: '/coverdesign', name: 'coverdesign', component: CoverDesign },
];

const router = new VueRouter({
  // mode: 'history',
  routes
});


// 全局钩子校验userID
// router.beforeEach((to, from, next) => {
//   window.scrollTo(0,0); // 回到页面顶部
//   Vue.prototype.$loading.hideAll(); // 清除所有loading
//   const URL = /account|address|wallet|wish/;
//   const userID = Vue.prototype.getCookie('userID');
//   // 为购买商品成功页面添加sessionStorage，判断是否跳转到详情页
//   if(/paysuccess/.test(to.path) && from.name) {
//     window.sessionStorage.setItem("keepPaysuccess", true);
//   }
//   if(URL.test(to.path) && !userID){
//     next({ name: "login",query: {skip:to}});
//   } else {
//     next();
//   }
// });

export default router;
