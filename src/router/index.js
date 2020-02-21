import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Home from '@/components/Home'
import AppIndex from '@/components/common/AppIndex'

Vue.use(Router)

export default new Router({
  mode : 'history',
  routes: [
    /*{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },*/
    {
      path:'/home',
      name: 'Home',
      component: Home,
      //home页面不需要访问
      redirect: '/index',
      children : [
                    {
                      path: '/index',
                      name: 'AppIndex',
                      component: AppIndex,
                      /*meta: {
                        requireAuth: true
                      }*/
                    }
                 ]
    },
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
  ]
})
