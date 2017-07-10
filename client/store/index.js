import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  funds: 100,
  stocks: [
    {
      name: 'BMW',
      value: 10,
      held: 0
    },
    {
      name: 'Google',
      value: 10,
      held: 0
    },
    {
      name: 'Apple',
      value: 10,
      held: 0
    },
    {
      name: 'Twitter',
      value: 10,
      held: 0
    }
  ]
}

const getters = {
  stocks: state => {
    return state.stocks
  },
  heldStocks: state => {
    return state.stocks.filter(element => {
      return element.held > 0
    })
  },
  funds: state => {
    return state.funds
  }
}

const mutations = {
  BUY (state, value) {
    const localCopy = state.stocks.find(element => {
      return value.stock.name === element.name
    })

    if (!localCopy) {
      console.log('Stock not found')
      return
    }

    state.funds -= parseInt(value.value)
    localCopy.held += parseInt(value.value)
  },
  SELL (state, value) {
    state.funds += value
  }
}

const actions = {

}

const store = new Vuex.Store({
  getters,
  state,
  mutations,
  actions
})

export default store
