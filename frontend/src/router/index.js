import Vue from "vue";
import VueRouter from "vue-router";
import homePage from "../views/home-page.vue";
import campaignCreate from "../views/campaign-create.vue";
import campaignDetails from "../views/campaign-details.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home-page",
    component: homePage
  },
  {
    path: "/create",
    name: "campaign-create",
    component: campaignCreate
  },
  {
    path: "/campaign/:id",
    name: "campaign-details",
    component: campaignDetails
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
