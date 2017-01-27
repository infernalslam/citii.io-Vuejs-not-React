<template>
  <div id="app">
    <!-- <index-view></index-view> -->
    <router-view></router-view>
  </div>
</template>

<script>
import IndexView from './components/index'
import store from './vuex/store'
console.log(store.state.page)
// import Vuex from 'vuex'
// global.vuex = Vuex
export default {
  store,
  name: 'app',
  components: {
    IndexView
  },
  data () {
    return {
      page: store.state.page
    }
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
