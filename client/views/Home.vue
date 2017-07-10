<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <app-header></app-header>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <transition name="move" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import appHeader from 'components/Header'

export default {
  components: {
    appHeader
  }
}
</script>

<style>
.move-enter-active, .move-leave-active {
  transition: opacity 0.5s;
}
.move-enter, .move-leave-to {
  opacity: 0;
}

</style>
