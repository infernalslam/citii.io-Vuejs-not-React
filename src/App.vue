<template>
  <div id="app">
    <index-view></index-view>
  </div>
</template>

<script>
import IndexView from './components/index'

export default {
  name: 'app',
  components: {
    IndexView
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Nunito');
@import url('https://fonts.googleapis.com/css?family=Allura');
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
