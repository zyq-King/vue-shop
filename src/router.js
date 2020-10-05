import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login'
import Home from './components/home'
Vue.use(Router)

const router = new Router({
  routes: [
    {path:'/',redirect:'/login'},
    {
      path:'/login',component:Login
    },
    {
      path:'/home',component:Home
    }
  ]
})

// 挂载路由的导航守卫
// home页面是有权限的需要token才能进入login不需要
router.beforeEach((to,from,next) =>{
  // to要访问的路径
  // from从哪个路径跳转过来
  // next 是一个函数，标识放行 next('/login')强制跳转
  if (to.path === '/login') return next();
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  // 判断是否有token
  if (!tokenStr) return next('/login')
  next()
})

export default router
