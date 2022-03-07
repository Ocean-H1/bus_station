import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store/store'
// 引入ElementUi
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
// 引入全局样式文件
import '../src/assets/css/global.css'
Vue.use(ElementUi)
// 引入Vue-Cookies
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
// 引入mock文件
require('../mock')

Vue.config.productionTip = false
// 全局挂载axios
Vue.prototype.$http = axios

import VueAxios from "vue-axios";
Vue.use(VueAxios, axios)

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
