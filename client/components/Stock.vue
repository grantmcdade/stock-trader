<template>
  <div class="panel panel-default" :class="{'panel-success': success, 'panel-info': info}">
    <div class="panel-heading">
      <strong>Stock Type</strong> (amount)
    </div>
    <div class="panel-body">
      <input ref="input" type="text" placeholder="Quantity"><button class="pull-right" @click="executeAction">{{action}}</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['action', 'success', 'info'],
  data() {
    return {
      something: 'else'
    }
  },
    methods: {
      executeAction(event) {
        this.$emit('executeAction', this.$refs.input.value);
      }
    }
  }
</script>

<style>

</style>
