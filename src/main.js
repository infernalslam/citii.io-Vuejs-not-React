// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './vuex/store'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
Vue.use(Vuex)
global.vuex = Vuex

import Page1 from './components/index'
import Page2 from './components/page2'

const routes = [
  { path: '/', component: Page1 },
  { path: '/costOflive', component: Page2 }
]
const router = new VueRouter({ routes })

/* eslint-disable no-new */
new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
}).$mount('#app')
