import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store/store'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
// 引入全局样式文件
import '../src/assets/css/global.css'

Vue.use(ElementUi)
Vue.config.productionTip = false
// 全局挂载axios
Vue.prototype.$http = axios

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
