import Vue from 'vue'
import Router from 'vue-router'
import Page from '../view/page.vue'
// import View from '../components/views/smallCircle.vue'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      component: Page
    }
  ]
})
