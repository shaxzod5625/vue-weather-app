// import { createStore } from 'vuex'
// import axios from 'axios'

// export default createStore({
//   state: {
    
//   },
//   mutations: {
//   },
//   actions: {
//     async geoPos() {
//       try {
//         navigator.geolocation.getCurrentPosition(position => {
//           lat = position.coords.latitude
//           lon = position.coords.longitude
//         })
//         const geoPosNow = await axios.get(`https://api.weatherbit.io/v2.0/current?lat=${this.lat}&lon=${this.lon}&key=${this.state.key}`)
//         console.log(geoPosNow);
//         return geoPosNow
//       } catch (e) {
//         console.log(e);
//         throw e
//       }
//     }
//   },
//   async getWeather(city) {
//     try {
//       const weather = await axios.get(`https://api.weatherbit.io/v2.0/current?&city=${city}&key=${this.state.key}`)
//       console.log(weather);
//     } catch (e) {
//       console.log(e);
//       throw e
//     }
//   },
//   getters: {

//   },
//   modules: {
//   }
// })