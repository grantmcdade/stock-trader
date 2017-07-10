import store from 'store'

export default function endDay () {
  const stocks = store.getters.stocks

  stocks.forEach(function (stock) {
    stock.value = getRandomValueInRange(10, 20)
    console.log(stock.value)
  }, this)

  store.commit('END_DAY', { stocks })
}

function getRandomValueInRange (min, max) {
  const newValue = Math.min(Math.floor(Math.random() * max) + min, max)
  return newValue
}
