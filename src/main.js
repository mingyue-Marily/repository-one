import Vue from 'vue'
import App from './App.vue'
import service from './assets/service.js'
import router from './router/index.js'
import '../plugins/element.js'
import 'font-awesome/css/font-awesome.min.css'
import * as echarts from 'echarts'
import jQuery from 'jquery'

import Fastclick from 'fastclick'
Fastclick.attach(document.body)
Vue.config.productionTip = false
Vue.prototype.service = service //挂在到原型  可以在全局使用
Vue.prototype.$echarts = echarts //挂在到原型  可以在全局使用
Vue.prototype.$ = jQuery //挂在到原型  可以在全局使用

new Vue({
  router,
  render: h => h(App)
  
}).$mount('#app')


// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(ElementUI)