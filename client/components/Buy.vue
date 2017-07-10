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
import {mapGetters} from 'vuex'
import appStock from 'components/Stock'

export default {
  data () {
    return {
      action: 'Buy'
    }
  },
  computed: {
    ...mapGetters(['stocks'])
  },
  methods: {
    preformPurchase (item) {
      const stock = this.stocks[item.index];
      this.$store.commit('BUY', {
        stock,
        value: item.value
      })
    }
  },
  components: {
    appStock
  }
}
</script>

<style>

</style>
