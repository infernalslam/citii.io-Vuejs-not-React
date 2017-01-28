<template lang="html">
  <div class="aligner">
    <router-link to="/"><div class="menu"><button class="continue-button">Menu</button></div></router-link>

    <div class="container">
      <div class="row">

        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="margin-top: 35vh;">
          <p class="font-title">What's your current annual salary?</p>
          <div style="text-align: center;">
            <select class="select-title">
              <option>{{ store.state.page2costOflive.currency_type }}</option></select>
            </select>

            <input type="number" class="class-input" v-model="money">
          </div>

          <p class="font-title">Result: {{ store.state.page2costOflive.currency_type }}</p>

          <!-- <div :style="{ display: dis }"> -->
          <div>
            <router-link to="/costOflive"><i class="fa fa-arrow-left arrow-button" aria-hidden="true"></i></router-link>
            <router-link to="/salary" :style="{ display: (money) ? 'inline-block': 'none' }"><i class="fa fa-arrow-right arrow-button" aria-hidden="true"></i></router-link>
          </div>
          <!-- </div> -->

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../vuex/store.js'
export default {
  name: 'page3',
  data () {
    return {
      store,
      money: 0,
      dis: 'none'
    }
  }
}
</script>

<style lang="css">

.font-title {
color: rgb(255, 255, 255);
font-family: Nunito, sans-serif;
font-size: 50px;
text-align: center;
}
.select-title {
  width: 75px;
  padding-left: 1em;
  height: 40px;
  color: rgb(59, 59, 59);
  background-color: rgb(255, 255, 255);
  font-size: 15px;
  display: inline-block;
  cursor: pointer;
  -webkit-appearance: none;
}
.class-input {
  width: 200px;
  padding-left: 1em;
  border: none;
  outline: 0px;
  height: 40px;
  color: rgb(59, 59, 59);
  font-size: 15px;
  display: inline-block;
  margin-left: 10px;
}
</style>
