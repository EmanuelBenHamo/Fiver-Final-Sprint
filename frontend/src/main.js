import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import './filters/filters.js'

import './styles/global.scss'
// const brandService = require('./services/brand.service.js');
// window.query = brandService.query;

Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
