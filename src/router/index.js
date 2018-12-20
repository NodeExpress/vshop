import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home';
import List from '../components/List';
import Car from '../components/Car';
import My from '../components/My';
import Detail from '../components/Detail';
// import addGood from '../components/AddGood';
Vue.use(Router)

export default new Router({
  // linkActiveClass:"abc",
  // mode:history,
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home, meta: { keepAlive: true } },
    { path: '/list', component: List },
    { path: '/car', component: Car },
    { path: '/my', component: My },
    { path: '/detail/:id', component: Detail, name: "detail" },
    { path: '/addGood', component: ()=>import('../components/AddGood') }
  ]
})
