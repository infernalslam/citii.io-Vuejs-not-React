<template lang="html">
  <div class="aligner">
    <router-link to="/"><div class="menu"><button class="continue-button">Menu</button></div></router-link>

    <div class="container">
      <div class="row">

        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="margin-top: 35vh;">
          <p class="font-title">What city do you currently live in?</p>
          <basic-select :options="options":selected-option="item" @select="onSelect"></basic-select>

          <p class="text-city">{{item.text}}</p>

          <div :style="{ display: dis }">
            <router-link to="/salary"><i class="fa fa-arrow-right arrow-button" aria-hidden="true"></i></router-link>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { BasicSelect } from 'vue-search-select'
import store from '../vuex/store.js'
// import Vuex from 'vuex'
// global.vuex = Vuex
export default {
  name: 'page2',
  data () {
    return {
      store,
      options: store.state.costOflive,
      searchText: '',
      item: {
        value: '',
        text: '',
        slug: '',
        currency_type: '',
        index: '',
        rent_index: '',
        groceries_index: '',
        restaurant_index: '',
        purchasing_index: ''
      },
      dis: 'none'
    }
  },
  methods: {
    onSelect (item) {
      this.item = item
      if (this.item.value && this.item.text) {
        this.dis = 'inline-block'
        console.log('มีค่า')
        store.commit('addpage2costOflive', this.item)
      } else {
        this.dis = 'none'
        console.log('ไม่มีค่า')
      }
      console.log('on select ', this.item)
    }
  },
  components: {
    BasicSelect
  }
}
</script>

<style lang="css">
.menu {
  position: absolute;
  z-index: 999;
  top: 10px;
  left: 5px;
}

.font-title {
  color: rgb(255, 255, 255);
  font-family: Nunito, sans-serif;
  font-size: 30px;
  text-align: center;
}
.continue-button {
  height: 38px;
    padding: 0 15px;
    text-align: center;
    font-size: 11px;
    font-weight: 600;
    line-height: 38px;
    letter-spacing: .1rem;
    text-transform: uppercase;
    text-decoration: none;
    white-space: nowrap;
    border-radius: 4px;
    border: 1px solid #bbb;
    cursor: pointer;
    box-sizing: border-box;
    display: inline-block;
    margin: 0px auto;
    color: #FFF;
    background-color: #ea4c88;
    border-color: #ea4c88;
    margin: 0 10px;
    -o-transition: .5s;
    -ms-transition: .5s;
    -moz-transition: .5s;
    -webkit-transition: .5s;
    transition: .5s;
}

.text-city {
  color: rgb(255, 255, 255);
  font-family: Nunito, sans-serif;
  font-size: 30px;
  text-align: center;
  margin-top: 32px;
}

.next-but {
  display: inline-block;
}

.arrow-button:hover {
    background-color: #E83479;
}
.arrow-button {
    color: #FFF;
    border-radius: 60px;
    padding: 10px;
    cursor: pointer;
    background: #EA4C88;
    margin: 10px;
    -o-transition: .5s;
    -ms-transition: .5s;
    -moz-transition: .5s;
    -webkit-transition: .5s;
    transition: .5s;
}
</style>
