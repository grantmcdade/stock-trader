<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-6" v-for="index in 4" :key="index">
        <app-stock :action="action" success="true" @executeAction="preformPurchase(index)"></app-stock>
      </div>
    </div>
  </div>
</template>

<script>
import appStock from 'components/Stock'

export default {
  data () {
    return {
      action: 'Buy'
    }
  },
  methods: {
    preformPurchase (index) {
      console.log('preformPurchase called');
    }
  },
  components: {
    appStock
  }
}
</script>

<style>

</style>
