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
    console.log('BUY Called')
    const localCopy = state.stocks.find(element => {
      return value.stock.name === element.name
    })

    if (!localCopy) {
      console.log('Stock not found')
      return
    }

    const cost = parseInt(value.stock.value) * parseInt(value.value)
    state.funds -= cost
    localCopy.held += parseInt(value.value)
  },
  SELL (state, value) {
    console.log('SELL Called')
    const localCopy = state.stocks.find(element => {
      return value.stock.name === element.name
    })

    if (!localCopy) {
      console.log('Stock not found')
      return
    }

    const cost = parseInt(value.stock.value) * parseInt(value.value)
    state.funds += cost
    console.log('Cost:', cost)
    localCopy.held -= parseInt(value.value)
    console.log('Held:', localCopy.held)
  },
  END_DAY (state, value) {
    console.log('END_DAY called')
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
