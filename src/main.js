// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import qs from 'qs'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'


axios.defaults.baseURL='http://localhost:8080/bravo'
// 挂载到vue原型链上
Vue.prototype.$axios = axios
Vue.prototype.$qs = qs

Vue.config.productionTip = false
Vue.use(ElementUI)

//每一个路由跳转前都先走此方法（判断是否登录，未登录的话就跳转到登录页面）
router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {
      if (store.state.user.username) {
        next();
      } else {
        next({
          path: 'login',
          query: {redirect: to.fullPath}
        })
      }
    } else {
      next();
    }
  }
)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
