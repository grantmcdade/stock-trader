<template>
  <div class="container-fluid">
    <div class="row" v-if="heldStocks.length > 0">
      <div class="col-sm-6" v-for="(stock, index) in heldStocks" :key="index">
        <app-stock :action="action" info="true" @executeAction="preformSale" :stock="stock" :index="index"></app-stock>
      </div>
    </div>
    <div v-else class="row">
      <div class="col-sm-12">
        <p>Please buy some stocks first.</p>
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
      action: 'Sell'
    }
  },
  computed: {
    ...mapGetters(['heldStocks'])
  },
  methods: {
    preformSale (item) {
      console.log('preformSale called', item);
    }
  },
  components: {
    appStock
  }
}
</script>

<style>

</style>
