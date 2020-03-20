import Vue from "vue";
import Vuex from "vuex";

import userStore from "./modules/userStore.js";
import campaignStore from "./modules/campaignStore.js";
import offerStore from "./modules/offerStore.js";
import brandStore from "./modules/brandStore.js";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        userStore,
        campaignStore,
        offerStore,
        brandStore
    }
});