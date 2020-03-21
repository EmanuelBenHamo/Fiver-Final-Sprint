import Vue from "vue";
import VueRouter from "vue-router";
import homePage from "../views/home-page.vue";
import campaignCreate from "../views/campaign-create.vue";
import campaignDetails from "../views/campaign-details.vue";
import backofficePage from "../views/backoffice-page.vue";
import offerList from "../cmps/offer-list.vue";
import influencerDetails from "../views/influencer-details.vue";
import list from "../cmps/list.cmp.vue"

Vue.use(VueRouter);

const routes = [{
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
        path: "/list",
        name: "list",
        component: list
    },
    {
        path: "/campaign/:id",
        name: "campaign-details",
        component: campaignDetails
    },
    {
        path: "/influencer/:id",
        name: "influencer-details",
        component: influencerDetails
    },
    {
        path: "/backoffice/",
        name: "backoffice-page",
        component: backofficePage,
        children: [{
            path: "offer/",
            name: "offer-list",
            component: offerList
        }]
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;