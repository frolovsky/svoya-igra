import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/styles/global.scss'
import Vuelidate from 'vuelidate'
import VueCookies from 'vue-cookies';

Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.use(VueCookies)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
