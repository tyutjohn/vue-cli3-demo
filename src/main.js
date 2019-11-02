/*
 * @Author: johnwang
 * @since: 2019-11-02 00:29:39
 * @lastTime: 2019-11-02 15:24:42
 * @LastAuthor: Do not edit
 * @Github: https://github.com/tyutjohn
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios,axios);
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
