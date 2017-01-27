import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
var dataCostOfLive = require('./cost_of_living_indices.json')

const state = {
  costOflive: dataCostOfLive,
  page: 1
}
/* mutations */
const mutations = {
  addPage: (state, page) => {
    state.page = page
  }
}

/* getters */
const getters = {
  page: state => state.page
}

/* actions */
const actions = {
  addPage: (state, page) => {
    store.commit('addPage', page)
  }
}

let store = new Vuex.Store({
  state: state,
  mutations: mutations,
  getters: getters,
  actions: actions
})

global.store = store
export default store
