import Vue from "vue";
import VueRouter from "vue-router";
import homePage from "../views/home-page.vue";
import campaignCreate from "../views/campaign-create.vue";

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
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
