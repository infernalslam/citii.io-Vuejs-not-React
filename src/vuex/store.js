import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
var dataCovertdataCostOfLive = []
var dataCostOfLive = require('./cost_of_living_indices.json')
for (var key in dataCostOfLive) {
  if (dataCostOfLive.hasOwnProperty(key)) {
    let setData = {
      value: new Date(),
      text: key,
      slug: dataCostOfLive[key].slug,
      currency_type: dataCostOfLive[key].currency_type,
      index: dataCostOfLive[key].index,
      rent_index: dataCostOfLive[key].rent_index,
      groceries_index: dataCostOfLive[key].groceries_index,
      restaurant_index: dataCostOfLive[key].restaurant_index,
      purchasing_index: dataCostOfLive[key].purchasing_index
    }
    dataCovertdataCostOfLive.push(setData)
  }
}

const state = {
  costOflive: dataCovertdataCostOfLive
}
/* mutations */
const mutations = {
  // addPage: (state, page) => {
  //   state.page = page
  // }
}

/* getters */
const getters = {
  // page: state => state.page
}

/* actions */
const actions = {
  // addPage: (state, page) => {
  //   store.commit('addPage', page)
  // }
}

let store = new Vuex.Store({
  state: state,
  mutations: mutations,
  getters: getters,
  actions: actions
})

global.store = store
export default store
