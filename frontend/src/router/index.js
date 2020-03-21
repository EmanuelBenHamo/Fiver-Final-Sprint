import Vue from "vue";
import VueRouter from "vue-router";
import homePage from "../views/home-page.vue";
import mainApp from "../views/main-app.vue";
import loginPage from "../views/login-page.vue";
import campaignCreate from "../views/campaign-create.vue";
import campaignDetails from "../views/campaign-details.vue";
import backofficePage from "../views/backoffice-page.vue";
import offerList from "../cmps/offer-list.vue";
import influencerDetails from "../views/influencer-details.vue";
import influencerCreate from "../views/influencer-create.vue";
import brandCreate from "../views/brand-create.vue";
import mainApp from "../views/main-app.vue";

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
    path: "/app",
    name: "main-app",
    component: mainApp
},
{
    path: "/login",
    name: "login-page",
    component: loginPage
},
  {
    path: "/brand",
    name: "brand",
    component: brandList
},
  {
    path: "/brand/create",
    name: "brand-create",
    component: brandCreate
},
{
    path: "/campaign",
    name: "campaign",
    component: campaignList
},
  {
    path: "/campaign/:id",
    name: "campaign-details",
    component: campaignDetails
  },
  {
    path:"/influencer/create",
    name: "influencer-create",
    component: influencerCreate
  },
  
  {
    path:"/influencer/:id",
    name: "influencer-details",
    component: influencerDetails
  },
  {
    path: "/backoffice/",
    name: "backoffice-page",
    component: backofficePage,
    children: [
      {
        path: "offer/",
        name: "offer-list",
        component: offerList
      }
    ]
  }
]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;