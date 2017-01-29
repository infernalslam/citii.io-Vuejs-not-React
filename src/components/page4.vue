<template lang="html">
  <div class="aligner">
    <router-link to="/"><div class="menu"><button class="continue-button">Menu</button></div></router-link>

    <div class="container">
      <div class="row">

        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="margin-top: 35vh;">
          <p class="font-title">What city do you wish to live in?</p>
          <basic-select :options="options":selected-option="item" @select="onSelect"></basic-select>

          <p class="text-city">{{item.text}}</p>

          <div>
            <router-link to="/salary"><i class="fa fa-arrow-left arrow-button" aria-hidden="true"></i></router-link>
            <router-link to="/show" :style="{ display: dis}"><i class="fa fa-arrow-right arrow-button" aria-hidden="true"></i></router-link>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { BasicSelect } from 'vue-search-select'
import store from '../vuex/store.js'
export default {
  name: 'page4',
  components: {
    BasicSelect
  },
  data () {
    return {
      store,
      wishlive: '',
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
        console.log('มีค่า')
        this.dis = 'inline-block'
        store.commit('addpage4wishlive', this.item)
      } else {
        console.log('ไม่มีค่า')
        this.dis = 'none'
      }
      console.log('on select ', this.item)
    }
  }
}
</script>

<style lang="css">
</style>
