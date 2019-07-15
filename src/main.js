// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
Vue.use(ElementUI)
import  axios from 'axios'
Vue.prototype.$http=axios
import $ from 'jquery'
import './assets/css/global.css'
import Video from 'video.js'
import moment from 'moment'
import '../node_modules/video.js/dist/video-js.css'
Vue.prototype.$video = Video
import echarts from'echarts'
Vue.prototype.$echarts = echarts
// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render:h =>h(App)
})
