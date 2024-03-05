import Vue from 'vue'
import App from './App.vue'
import './quasar'
import VueRouter from 'vue-router'
import store from './store.js'
import router from './router.js'
import SmoothScroll from 'vue2-smooth-scroll'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faFontAwesome, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faFontAwesome, faInstagram)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.use(VueRouter)

Vue.use(SmoothScroll)

new Vue({
  render: h => h(App),
  store: store,
  router: router
}).$mount('#app')
