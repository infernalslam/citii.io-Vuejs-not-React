// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import store from './vuex/store'
import Vuex from 'vuex'
import VueResouce from 'vue-resource'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(VueResouce)
global.vuex = Vuex

import Page1 from './components/index'
import Page2 from './components/page2'
import Page3 from './components/page3'
import Page4 from './components/page4'
import Page5 from './components/page5'

const routes = [
  { path: '/', component: Page1 },
  { path: '/costOflive', component: Page2 },
  { path: '/salary', component: Page3 },
  { path: '/wish', component: Page4 },
  { path: '/show', component: Page5 }
]
const router = new VueRouter({ routes })

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  render: h => h(App)
}).$mount('#app')
