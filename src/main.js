import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import '../src/assets/css/style.css'
Vue.use(ElementUI,{ size: 'small' })
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
