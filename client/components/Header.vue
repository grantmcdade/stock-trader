<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#collapsible-menu" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <router-link to="/" class="navbar-brand">Stock Trader</router-link>
      </div>
      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="collapsible-menu">
        <ul class="nav navbar-nav">
          <router-link to="/sell" tag="li" active-class="active"><a>Portfolio</a></router-link>
          <router-link to="/buy" tag="li" active-class="active"><a>Stocks</a></router-link>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li>
            <p class="navbar-text" style="cursor: pointer;" @click="endDay">End Day</p>
          </li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Save &amp; Load
              <span class="caret"></span>
            </a>
            <ul class="dropdown-menu">
              <li>
                <a style="cursor: pointer;" @click="save">Save</a>
              </li>
              <li>
                <a style="cursor: pointer;" @click="load">Load</a>
              </li>
            </ul>
          </li>
          <li>
            <p class="navbar-text">Funds (amount)</p>
          </li>
        </ul>
      </div>
      <!-- /.navbar-collapse -->
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    endDay() {
      console.log('endDay called');
    },
    save() {
      console.log('save called');
    },
    load() {
      console.log('load called');
    }
  }
}
</script>

<style>

</style>
