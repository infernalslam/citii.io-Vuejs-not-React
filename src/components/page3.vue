<template lang="html">
  <div class="aligner">
    <router-link to="/"><div class="menu"><button class="continue-button">Menu</button></div></router-link>

    <div class="container">
      <div class="row">

        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="margin-top: 35vh;">
          <p class="font-title">What's your current annual salary?</p>
          <div style="text-align: center;">
            <select class="select-title">
              <option>THB</option></select>
            </select>

            <input type="number" class="class-input">
          </div>

          <!-- <div :style="{ display: dis }">
            <router-link to="/salary"><i class="fa fa-arrow-right arrow-button" aria-hidden="true"></i></router-link>
          </div> -->

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
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
