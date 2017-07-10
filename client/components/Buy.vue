<template>
  <div class="container-fluid">
    <div class="row" v-if="stocks.length > 0">
      <div class="col-sm-6" v-for="(stock, index) in stocks" :key="index">
        <app-stock :action="action" success="true" @executeAction="preformPurchase" :stock="stock" :index="index"></app-stock>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <p>There are no stocks available.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import appStock from 'components/Stock'

export default {
  data () {
    return {
      action: 'Buy'
    }
  },
  computed: {
    ...mapGetters(['funds', 'stocks'])
  },
  methods: {
    preformPurchase (item) {
      const stock = this.stocks[item.index];
      const cost = stock.value * item.value;
      if (this.funds >= cost) {
        this.$store.commit('BUY', {
          stock,
          value: item.value
        })
      }
      else {
        alert("You don't have enough funds")
      }
    }
  },
  components: {
    appStock
  }
}
</script>

<style>

</style>
