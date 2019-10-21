import Vue from 'vue'
import App from './App'
import axios from 'axios'

import './design'

Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
