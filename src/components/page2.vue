<template lang="html">
  <div class="aligner">
    <router-link to="/"><div class="menu"><button class="continue-button">Menu</button></div></router-view>

    <div class="container">
      <div class="row">

        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <p class="font-title">What city do you currently live in?</p>
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
</style>
