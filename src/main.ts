import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import Toasted from 'vue-toasted'

import 'vuetify/dist/vuetify.min.css'

import AppHeader from './shared/components/header.vue'

Vue.use(Vuetify)
Vue.use(Toasted)

Vue.component('AppHeader', AppHeader)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
