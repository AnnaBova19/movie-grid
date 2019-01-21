import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Import components
import Vuetify from 'vuetify'
import Toasted from 'vue-toasted'
import AppHeader from './shared/components/header.vue'

// Import stylesheets
import 'vuetify/dist/vuetify.min.css'

// Init plugins
Vue.use(Vuetify)
Vue.use(Toasted)

Vue.component('AppHeader', AppHeader)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
