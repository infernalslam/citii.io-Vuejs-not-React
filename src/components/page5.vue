<template lang="html">
  <div style="height: 100%">
    <router-link to="/"><div class="menu"><button class="continue-button">Menu</button></div></router-link>



    <div class="background-darken" style="position: relative;">
      <img :src="picPath" alt="Stock Banner" style="width: 100%; opacity: 0.7; height: 30vh;">
      <div class="banner-image-intro">
        {{ store.state.wishlive.text }}
        <br>
        <span class="banner-image-sub-intro">
          {{ store.state.wishlive.text }} , features a wide variety of free time activities.
        </span>
      </div>

      <div class="container" style="position: relative; padding: 30px;">
        <p class="to-have">
          To have the same standard of living, a comparable salary would be
        </p>
          <p style="color: rgb(61, 242, 255); font-family: Nunito, sans-serif; font-size: 50px; text-align: center; margin-bottom: 3rem;">
            ≈ {{ store.state.wishlive.currency_type }} 1,400 </p>

            <div class="row"><div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 mobilePadding">
              <div id="icon-box" style="display: block; margin: 0px auto;">
                <span><i class="fa fa-home fa fa-lg-modification"></i></span>
              </div>

              <p style="">
                Rent/Living</p>
                <p class="tooltip-bottom" data-tooltip="Rent is 2% more expensive in Bangkok, Thailand!" style="color: antiquewhite; font-family: Nunito, sans-serif; font-size: 30px; text-align: center; width: 50%; margin: 0px auto; display: block;">
                  2%<i class="fa fa-arrow-up" aria-hidden="true" style="color: rgb(61, 242, 255); font-size: 20px; margin-left: 3px;"></i>
                </p>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 mobilePadding">
                <div id="icon-box" class="icon1">
                  <span><i class="fa fa-shopping-cart fa fa-lg-modification"></i></span>
                </div>
                <p style="color: antiquewhite; text-align: center; font-family: Nunito, sans-serif; font-size: 20px; font-weight: 700; margin: 0px auto; padding-top: 10px; display: block;">Groceries</p>
                <p class="tooltip-bottom" data-tooltip="Groceries are cheaper by 16% in Bangkok, Thailand." style="color: antiquewhite; font-family: Nunito, sans-serif; font-size: 30px; text-align: center; width: 50%; margin: 0px auto; display: block;">
                 16% <i class="fa fa-arrow-down" aria-hidden="true" style="color: rgb(234, 76, 136); font-size: 20px; margin-left: 3px;"></i></p></div>




                 <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 mobilePadding">
                   <div id="icon-box" style="display: block; margin: 0px auto;"><span><i class="fa fa-cutlery fa fa-lg-modification"></i></span>
                   </div><p style="color: antiquewhite; text-align: center; font-family: Nunito, sans-serif; font-size: 20px; font-weight: 700; margin: 0px auto; padding-top: 10px; display: block;">
                     Dining Out</p><p class="tooltip-bottom" data-tooltip="Dining out is cheaper by 73% in Bangkok, Thailand." style="color: antiquewhite; font-family: Nunito, sans-serif; font-size: 30px; text-align: center; width: 50%; margin: 0px auto; display: block;">
                       73%<i class="fa fa-arrow-down" aria-hidden="true" style="color: rgb(234, 76, 136); font-size: 20px; margin-left: 3px;"></i></p></div>
                       <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 mobilePadding"><div id="icon-box" style="display: block; margin: 0px auto;"><span><i class="fa fa-star fa fa-lg-modification"></i></span>
                       </div><p style="color: antiquewhite; text-align: center; font-family: Nunito, sans-serif; font-size: 20px; font-weight: 700; margin: 0px auto; padding-top: 10px; display: block;">Purchasing Power</p>
                       <p class="tooltip-bottom" data-tooltip="Purchasing Power (i.e. the number of of goods/services that can be purchased by a unit of currency) is 50% lower in Bangkok, Thailand!" style="color: antiquewhite; font-family: Nunito, sans-serif; font-size: 30px; text-align: center; width: 50%; margin: 0px auto; display: block;">
                         50% <i class="fa fa-arrow-down" aria-hidden="true" style="color: rgb(61, 242, 255); font-size: 20px; margin-left: 3px;"></i></p></div>
                       </div>
                    </div>
    </div>

    <div style="height: 100%">

    </div>


  </div>
</template>
<!-- https://pixabay.com/api/?key=4394380-72396ab7a413b4605da883f65&q=yellow+flowers&image_type=photo -->
<script>
import store from '../vuex/store.js'
export default {
  data () {
    return {
      store,
      url: 'https://pixabay.com/api/?key=4394380-72396ab7a413b4605da883f65&q',
      picPath: ''
    }
  },
  methods: {
    loadPic () {
      let vm = this
      this.$http.get(this.url + store.state.wishlive + '&image_type=photo').then((res) => {
        console.log(res.data.hits[Math.floor((Math.random() * 19) + 1)].webformatURL)
        vm.picPath = res.data.hits[Math.floor((Math.random() * 19) + 1)].webformatURL
      })
    }
  },
  mounted () {
    this.loadPic()
    console.log('wish location : ', store.state.wishlive.text)
  }
}
</script>

<style lang="css">


.rent {
  color: antiquewhite;
  text-align: center;
  font-family: Nunito, sans-serif;
  font-size: 20px;
  font-weight: 700;
  margin: 0px auto;
  padding-top: 10px;
  display: block;
}
.icon1 {
  display: block;
  margin: 0px auto;
}
.background-darken {
    background: -webkit-linear-gradient(top ,rgba(0,0,0,.90),rgba(0,0,0,.90),rgba(0,0,0,.90),rgba(0,0,0,.90),rgba(0,0,0,.90));
    background: linear-gradient(to bottom,rgba(0,0,0,.90),rgba(0,0,0,.90),rgba(0,0,0,.90),rgba(0,0,0,.90),rgba(0,0,0,.90));
}

.banner-image-intro {
    color: #FFF;
    font-family: Nunito, sans-serif;
    font-size: 30px;
    font-weight: 700;
    position: absolute;
    top: 35%;
    width: 100%;
    text-align: center;
    z-index: 1;
}

.banner-image-sub-intro {
    font-size: 20px;
    font-weight: 400;
}

.to-have {
  color: rgb(255, 255, 255); font-family: Nunito, sans-serif; font-size: 25px; text-align: center; margin-top: 1rem; margin-bottom: 0px;
}
</style>
