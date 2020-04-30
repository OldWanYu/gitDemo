import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import './style.scss'
//图标库
import './assets/fonts/font-awesome.min.css'

//video
import Video from 'video.js'
import 'video.js/dist/video-js.css'
Vue.prototype.$video = Video

// import axios from 'axios'
import http from './http'
Vue.prototype.$http=http;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
