import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/Login'
import ApiList from '@/components/api/ApiList'
import ApiInfo from '@/components/api/ApiInfo'
import ApiCreate from '@/components/api/ApiCreate'
import ApiEdit from '@/components/api/ApiEdit'
import ProjectCreate from '@/components/project/create'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/api/list',
      name: 'ApiList',
      component: ApiList
    },
    {
      path: '/api/info',
      name: 'ApiInfo',
      component: ApiInfo
    },
    {
      path: '/api/create',
      name: 'ApiCreate',
      component: ApiCreate
    },
    {
      path: '/api/edit',
      name: 'ApiEdit',
      component: ApiEdit
    },
    {
      path: '/project/create',
      name: 'ProjectCreate',
      component: ProjectCreate
    }
  ]
});

// 全局路由守卫
router.beforeEach((to, from, next) => {
  console.log('进入全局路由守卫');
  // to: Route: 即将要进入的目标 路由对象
  // from: Route: 当前导航正要离开的路由
  // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。

  if (to.name == 'Login') { next(); }

  let isLogin = localStorage.getItem("UserInfo");  // 是否登录
  if (isLogin == null) {
    next({
      name: 'Login'
    });
  } else {
    next();
  }
});

export default router;


