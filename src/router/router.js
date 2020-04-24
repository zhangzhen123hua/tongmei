import Vue from 'vue'
import Router from 'vue-router'
import Login from '../view/login.vue'
import Demo from '../view/HelloWorld.vue'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/demo',
      component: Demo
    }
   
  ]
})