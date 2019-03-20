import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
import Register from '@/components/Register';
// import Home from '@/components/Home';
// import Mine from '@/components/Mine';
// import Main from '@/components/Main';
import WeightVolume from '@/components/WeightVolume';
// import HelloWorld from '@/components/HelloWorld';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/user/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/user/register',
      name: 'register',
      component: Register,
    },
    // {
    //   path: '/',
    //   redirect: '/user/login',
    // },
    {
      path: '/',
      redirect: '/createWaybill',
    },
    {
      path: '/home',
      name: 'home',
      // component: Home,
      // 懒加载
      component: (resolve) => require(['../components/Home'], resolve),
      children: [
        {
          path: '/mine',
          name: 'mine',
          // component: Mine,
          // 懒加载
          component: (resolve) => require(['../components/Mine'], resolve),
        },
        {
          path: '',
          // component: Main,
          // 懒加载
          component: (resolve) => require(['../components/Main'], resolve),
        },
        {
          path: '/main',
          // component: Main,
          // 懒加载
          component: (resolve) => require(['../components/Main'], resolve),
        },
      ],
    },
    {
      path: '/weightVolume',
      name: 'weightVolume',
      component: WeightVolume,
      // meta: {
      //   requireAuth: true,
      //  },
    },
    {
      path: '/createWaybill',
      name: 'createWaybill',
      component: (resolve) => require(['../components/CreateWaybill'], resolve),
      // meta: {
      //   requireAuth: true,
      //  },
    },
  ],
});
//  判断是否需要登录权限 以及是否登录
router.beforeEach((to, from, next) => {
  if (to.matched.some(res => res.meta.requireAuth)) {// 判断是否需要登录权限
    if (window.localStorage.getItem('userinfo')) {// 判断是否登录
      next()
    } else {// 没登录则跳转到登录界面
      next({
        path: '/user/login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
})
export default router;


