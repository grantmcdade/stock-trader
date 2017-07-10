import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './components/App'
import router from './router'
import store from './store'
import VueHttp from 'vue-resource'

sync(store, router)

Vue.use(VueHttp)

const http = new VueHttp()

const app = new Vue({
  router,
  store,
  http,
  ...App
})

export { app, router, store }
