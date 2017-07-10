<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-6" v-for="index in 4" :key="index">
        <app-stock :action="action" info="true" @executeAction="preformSale(index)"></app-stock>
      </div>
    </div>
  </div>
</template>

<script>
import appStock from 'components/Stock'

export default {
  data () {
    return {
      action: 'Sell'
    }
  },
  methods: {
    preformSale (index) {
      console.log('preformSale called');
    }
  },
  components: {
    appStock
  }
}
</script>

<style>

</style>
