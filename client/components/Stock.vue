<template>
  <div class="panel panel-default" :class="{'panel-success': success, 'panel-info': info}">
    <div class="panel-heading">
      <strong>{{stock.name}}</strong> (Price: ${{stock.value}})
      <div class="pull-right" v-if="stock.held > 0">
        Held: {{stock.held}}
      </div>
    </div>
    <div class="panel-body">
      <input ref="input" type="number" placeholder="Quantity">
      <button class="pull-right" @click="executeAction">{{action}}</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['action', 'success', 'info', 'stock', 'index'],
  methods: {
    executeAction (event) {
      this.$emit('executeAction', {
        value: parseInt(this.$refs.input.value),
        index: this.index
      });
      this.$refs.input.value = ''
    }
  }
}
</script>

<style>

</style>
