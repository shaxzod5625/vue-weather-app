<template>
  <Particles />

  <ul class="cb-slideshow">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>

  <div class="container-fluid">
    <div class="row cb-slideshow-text-container">
      <div class="tm-content col-xl-6 col-sm-8 col-xs-8 ml-auto section">
        <header class="mb-5">
          <div v-if="position">
            <h1>{{ startApiParams.city_name }}</h1>
          </div>
          <div v-else>
            <h1>Weather</h1>
          </div>
        </header>
        <div v-if="position">
          <p class="mb-5">
            Now: {{ startApiParams.temp }} ℃,
            {{ startApiParams.weather.description }} <img class="weather__img" :src=" require(`./assets/img/icons/${startApiParams.weather.icon}.png`) " alt="">
          </p>
        </div>

        <form class="subscribe-form" @submit.prevent="qwer">
          <div class="row form-section">
            <div class="col-md-7 col-sm-7 col-xs-7">
              <input
                type="text"
                class="form-control"
                placeholder="Your city"
                required
                v-model="cityName"
              />
            </div>
            <div class="col-md-5 col-sm-5 col-xs-5">
              <button
                type="submit"
                class="tm-btn-subscribe"
                @click="putWeather"
              >
                Search
              </button>
            </div>
          </div>
        </form>

        <div class="tm-social-icons-container text-xs-center">
          <a href="#" class="tm-social-link"><i class="fa fa-facebook"></i></a>
          <a href="#" class="tm-social-link"
            ><i class="fa fa-google-plus"></i
          ></a>
          <a href="#" class="tm-social-link"><i class="fa fa-twitter"></i></a>
          <a href="#" class="tm-social-link"><i class="fa fa-linkedin"></i></a>
        </div>
      </div>
    </div>
    <div class="footer-link">
      <p>Copyright © 2020 Your Company - Design: TemplateMo</p>
    </div>
  </div>
</template>

<script>
import Particles from "./components/Particles.vue";
import axios from "axios";
export default {
  name: "App",
  components: { Particles },
  data: () => ({
    position: null,
    cityName: "",
    startApiParams: null,
    key: "f7fbd64b713b4c128431365652c5280b",
  }),
  async created() {
    try {
      if (navigator.geolocation) {
        await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition((pos) => {
            this.position = pos.coords;
            resolve(this.position);
          });
        });
      } else {

      }
      await axios
        .get(
          `https://api.weatherbit.io/v2.0/current?lat=${this.position.latitude}&lon=${this.position.longitude}&key=${this.key}`
        )
        .then((res) => {
          this.startApiParams = res.data.data[0];
        });
    } catch (e) {
      console.log(e);
      throw e;
    }
  },
  methods: {
    async putWeather() {
      if (this.cityName != "") {
        await axios
          .get(
            `https://api.weatherbit.io/v2.0/current?&city=${this.cityName}&key=${this.key}`
          )
          .then((res) => {
            this.startApiParams = res.data.data[0];
            this.cityName = "";
          })
          .catch((e) => {
            console.log(e);
            throw e;
          });
      }
    },
  },
};
</script>
<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.6.0/css/bootstrap.min.css";
@import "assets/index.css";
@import "assets/animation.css";
.weather__img {
  width: 50px;
}
</style>
