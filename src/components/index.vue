<template>
  <div>
    <div style="height: inherit;">
      <div class="aligner">
        <div>
          <div class="welcome-block">
            <img src="../../static/logo.png" alt="citii.io" class="">
            <h3 class="welcome-intro">citii.<span style="color: rgb(234, 76, 136);">io</span></h3>
            <p class="welcome-description"> Ever thought how far your current salary will go in another city?
              This simple app will calculate how much more (or less)
              you would need in order to maintain the same standard of living in another city!</p>
            <div style="width: 100%; text-align: center;">
              <button class="de">
                Details</button>
                <!-- <button class="continue-button">Start</button> -->
                <router-link to="/costOflive"><button class="continue-button">Start</button></router-link>
            </div>
          </div>
          <div class="footer">
          <div class="footer-description1">
            <span class="footer-name-text">HD</span>
            <!-- react-text: 71 --> © 2017<!-- /react-text -->
          </div>

          <div class="footer-description2">
            <!-- react-text: 73 -->Built with <!-- /react-text -->
            <a href="https://facebook.github.io/react/" target="_blank" class="footer-link-description">Vuejs</a>
            <!-- react-text: 75 --> <!-- /react-text -->
            <img src="../../static/Vuejs.png" class="footer-logo" alt="Vue Logo"></div>

            <div class="footer-social-media">
              <a href="http://hassandjirdeh.com" target="_blank" class="social_links">
                <i id="social-link" class="fa fa-h-square fa-2x social" aria-hidden="true">
                </i></a><a href="https://github.com/djirdehh" target="_blank" class="social_links">
                  <i id="social-link" class="fa fa-github-square fa-2x social" aria-hidden="true"></i></a>
                  <a href="https://ca.linkedin.com/in/hassandjirdeh" target="_blank" class="social_links">
                    <i id="social-link" class="fa fa-linkedin-square fa-2x social" aria-hidden="true"></i></a>
                    <a href="mailto:hassan.djirdeh@mail.utoronto.ca" target="_blank" class="social_links">
                      <i id="social-em" class="fa fa-envelope-square fa-2x social"></i></a>
                    </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// import store from '../vuex/store.js'
export default {
  name: 'index',
  components: {}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Nunito');
@import url('https://fonts.googleapis.com/css?family=Allura');

div {
    display: block;
}

.welcome-block {
    background: #2C3338;
    width: 500px !important;
    padding: 10px;
    margin-top: 19vh;
}

body {
  background: #2C3338;
  height: 100%;
  margin: 0;
}

.aligner {
    height: 100%;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    align-items: center;
    -webkit-align-items: center;
    justify-content: center;
    -webkit-justify-content: center;
}

.welcome-logo {
    height: 150px;
    display: block;
    margin: 0 auto;
}

.welcome-intro {
    color: #FFF;
    font-family: Nunito, sans-serif;
    font-size: 55px;
    letter-spacing: 5px;
    text-align: center;
    margin: 12px;
}

.welcome-description {
    color: #FFF;
    font-family: Nunito, sans-serif;
    /*font-size: 14.5px;*/
    font-size: 15px;
    line-height: 1.65;
    text-align: center;
    margin-top: 0;
    margin-bottom: 25px;
        font-weight: bold;
}

.de {
  height: 38px;
  padding: 0px 15px;
  text-align: center;
  font-size: 11px;
  font-weight: 600;
  line-height: 38px;
   letter-spacing: 0.1rem;
    text-transform: uppercase;
     text-decoration: none;
      white-space: nowrap;
      border-radius: 4px;
      border: 1px solid rgb(255, 255, 255);
      cursor: pointer;
      box-sizing: border-box;
      display: inline-block;
      color: rgb(234, 76, 136);
      background-color: rgb(255, 255, 255);
      margin: 0px 10px;
}

.continue-button:hover {
    background-color: #E83479;
    border-color: #E83479;
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

.footer {
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
}

.footer-description1 {
    font-family: Nunito, sans-serif;
    font-size: 13px;
    text-align: center;
    text-shadow: 0.1px 0.1px #ea4c88;
    color: #FFF;
}
.footer-name-text {
    color: #FFF;
    font-family: Allura, cursive;
    text-align: center;
    font-size: 17px;
    -o-transition: .5s;
    -ms-transition: .5s;
    -moz-transition: .5s;
    -webkit-transition: .5s;
    transition: .5s;
}

.footer-description2 {
    font-family: Nunito, sans-serif;
    font-size: 11px;
    text-align: center;
    text-shadow: 0.1px 0.1px #ea4c88;
    color: #FFF;
    padding-bottom: 5px;
}

.footer-link-description {
    text-decoration: none !important;
    color: #4dbb88 !important;
    display: inline !important;
    cursor: pointer !important;
}

.footer-social-media {
    text-align: center;
}

a.social_links {
    color: #ea4c88 !important;
}

.social_links {
    text-decoration: none;
    color: #ea4c88;
}
</style>
