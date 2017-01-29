<template lang="html">
  <div style="height: 100%;">
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
        <p class="to-have"> To have the same standard of living, a comparable salary would be </p>
          <p class="title-mo">
            ≈ {{ store.state.live.currency_type }} 1,400 </p>

            <div class="row">
              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 mobilePadding">
                <div id="icon-box"><span><i class="fa fa-home fa fa-lg-modification"></i></span></div>
                <p class="rent">Rent/Living</p>
                <p class="tooltip-bottom"> {{ Math.round(((store.state.wishlive.rent_index - store.state.live.rent_index) / store.state.live.rent_index) * 100) }} % <i class="fa fa-arrow-up" aria-hidden="true"></i></p>
              </div>


              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 mobilePadding">
                <div id="icon-box"><span><i class="fa fa-shopping-cart fa fa-lg-modification"></i></span></div>
                <p class="rent">Groceries</p>
                <p class="tooltip-bottom"> {{ Math.round(((store.state.wishlive.groceries_index - store.state.live.groceries_index) / store.state.live.groceries_index) * 100) }} % <i class="fa fa-arrow-up" aria-hidden="true"></i></p>
              </div>


              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 mobilePadding">
                <div id="icon-box"><span><i class="fa fa-cutlery fa fa-lg-modification"></i></span></div>
                <p class="rent">Dining Out</p>
                <p class="tooltip-bottom"> {{ Math.round(((store.state.wishlive.restaurant_index - store.state.live.restaurant_index) / store.state.live.restaurant_index) * 100) }} % <i class="fa fa-arrow-up" aria-hidden="true"></i></p>
              </div>


              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 mobilePadding">
                <div id="icon-box"><span><i class="fa fa-cutlery fa fa-lg-modification"></i></span></div>
                <p class="rent">Purchasing Power</p>
                <p class="tooltip-bottom"> {{ Math.round(((store.state.wishlive.purchasing_index - store.state.live.purchasing_index) / store.state.live.purchasing_index) * 100) }} % <i class="fa fa-arrow-up" aria-hidden="true"></i></p>
              </div>

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

.title-mo {
  color: rgb(61, 242, 255); font-family: Nunito, sans-serif; font-size: 50px; text-align: center; margin-bottom: 3rem;
}


.tooltip-bottom {
  position: relative;
cursor: pointer;
color: antiquewhite;
font-family: Nunito, sans-serif;
font-size: 30px;
text-align: center;
width: 50%;
margin: 0px auto;
display: block;
}

#icon-box {
    display: block;
    margin: 0px auto;
    position: relative;
    text-align: center;
    overflow: hidden;
    width: 75px;
    height: 75px;
    font-size: 50px;
    line-height: 150px;
    background-color: #ea4c88;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    -ms-border-radius: 15px;
    border-radius: 15px;
}

#icon-box span {
    display: block;
    position: absolute;
    height: 75px;
    width: 75px;
    color: #fff;
    text-shadow: #ad3664 1px 1px, #ad3664 2px 2px, #ad3664 3px 3px, #ad3664 4px 4px, #ad3664 5px 5px, #ad3664 6px 6px, #ad3664 7px 7px, #ad3664 8px 8px, #ad3664 9px 9px, #ad3664 10px 10px, #ad3664 11px 11px, #ad3664 12px 12px, #ad3664 13px 13px, #ad3664 14px 14px, #ad3664 15px 15px, #ad3664 16px 16px, #ad3664 17px 17px, #ad3664 18px 18px, #ad3664 19px 19px, #ad3664 20px 20px, #ad3664 21px 21px, #ad3664 22px 22px, #ad3664 23px 23px, #ad3664 24px 24px, #ad3664 25px 25px, #ad3664 26px 26px, #ad3664 27px 27px, #ad3664 28px 28px, #ad3664 29px 29px, #ad3664 30px 30px, #ad3664 31px 31px, #ad3664 32px 32px, #ad3664 33px 33px, #ad3664 34px 34px, #ad3664 35px 35px, #ad3664 36px 36px, #ad3664 37px 37px, #ad3664 38px 38px, #ad3664 39px 39px, #ad3664 40px 40px, #ad3664 41px 41px, #ad3664 42px 42px, #ad3664 43px 43px, #ad3664 44px 44px, #ad3664 45px 45px, #ad3664 46px 46px, #ad3664 47px 47px, #ad3664 48px 48px, #ad3664 49px 49px, #ad3664 50px 50px, #ad3664 51px 51px, #ad3664 52px 52px, #ad3664 53px 53px, #ad3664 54px 54px, #ad3664 55px 55px, #ad3664 56px 56px, #ad3664 57px 57px, #ad3664 58px 58px, #ad3664 59px 59px, #ad3664 60px 60px, #ad3664 61px 61px, #ad3664 62px 62px, #ad3664 63px 63px, #ad3664 64px 64px, #ad3664 65px 65px, #ad3664 66px 66px, #ad3664 67px 67px, #ad3664 68px 68px, #ad3664 69px 69px, #ad3664 70px 70px, #ad3664 71px 71px, #ad3664 72px 72px, #ad3664 73px 73px, #ad3664 74px 74px, #ad3664 75px 75px, #ad3664 76px 76px, #ad3664 77px 77px, #ad3664 78px 78px, #ad3664 79px 79px, #ad3664 80px 80px, #ad3664 81px 81px, #ad3664 82px 82px, #ad3664 83px 83px, #ad3664 84px 84px, #ad3664 85px 85px, #ad3664 86px 86px, #ad3664 87px 87px, #ad3664 88px 88px, #ad3664 89px 89px, #ad3664 90px 90px, #ad3664 91px 91px, #ad3664 92px 92px, #ad3664 93px 93px, #ad3664 94px 94px, #ad3664 95px 95px, #ad3664 96px 96px, #ad3664 97px 97px, #ad3664 98px 98px, #ad3664 99px 99px, #ad3664 100px 100px, #ad3664 101px 101px, #ad3664 102px 102px, #ad3664 103px 103px, #ad3664 104px 104px, #ad3664 105px 105px, #ad3664 106px 106px, #ad3664 107px 107px, #ad3664 108px 108px, #ad3664 109px 109px, #ad3664 110px 110px, #ad3664 111px 111px, #ad3664 112px 112px, #ad3664 113px 113px, #ad3664 114px 114px, #ad3664 115px 115px, #ad3664 116px 116px, #ad3664 117px 117px, #ad3664 118px 118px, #ad3664 119px 119px, #ad3664 120px 120px, #ad3664 121px 121px, #ad3664 122px 122px, #ad3664 123px 123px, #ad3664 124px 124px, #ad3664 125px 125px, #ad3664 126px 126px, #ad3664 127px 127px, #ad3664 128px 128px, #ad3664 129px 129px, #ad3664 130px 130px, #ad3664 131px 131px, #ad3664 132px 132px, #ad3664 133px 133px, #ad3664 134px 134px, #ad3664 135px 135px, #ad3664 136px 136px, #ad3664 137px 137px, #ad3664 138px 138px, #ad3664 139px 139px, #ad3664 140px 140px, #ad3664 141px 141px, #ad3664 142px 142px, #ad3664 143px 143px, #ad3664 144px 144px, #ad3664 145px 145px, #ad3664 146px 146px, #ad3664 147px 147px, #ad3664 148px 148px, #ad3664 149px 149px, #ad3664 150px 150px;
}
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
