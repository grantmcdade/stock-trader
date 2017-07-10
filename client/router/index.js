import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Buy from 'components/Buy'
import Sell from 'components/Sell'
import Main from 'components/Main'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [{
    path: '/',
    component: Home,
    children: [
      {
        path: '',
        component: Main
      },
      {
        path: '/buy',
        component: Buy
      },
      {
        path: '/sell',
        component: Sell
      }
    ]
  }]
})
