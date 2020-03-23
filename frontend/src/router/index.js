import Vue from 'vue';
import VueRouter from 'vue-router';
import homePage from '../views/home-page.vue';
import mainApp from '../views/main-app.vue';
import loginPage from '../views/login-page.vue';
import campaignCreate from '../views/campaign-create.vue';
import campaignDetails from '../views/campaign-details.vue';
import backofficePage from '../views/backoffice-page.vue';
import offerList from '../cmps/offer-list.vue';
import influencerDetails from '../views/influencer-details.vue';
import signupPage from '../views/signup-page.vue';
import dashBoard from '../cmps/dash-board.vue';
import messageList from '../cmps/message-list.vue';
import dashCampaignList from '../cmps/dash-campaign-list.vue'

Vue.use(VueRouter);

const routes = [{
        path: '/',
        name: 'home-page',
        component: homePage
    },
    {
        path: '/create',
        name: 'campaign-create',
        component: campaignCreate
    },
    {
        path: '/app',
        name: 'main-app',
        component: mainApp
    },
    {
        path: '/login',
        name: 'login-page',
        component: loginPage
    },
    {
        path: '/signup',
        name: 'signup-page',
        component: signupPage
    },
    {
        path: '/campaign/:id',
        name: 'campaign-details',
        component: campaignDetails
    },
    {
        path: '/influencer/:id',
        name: 'influencer-details',
        component: influencerDetails
    },
    {
        path: '/backoffice/',
        name: 'backoffice-page',
        component: backofficePage,
        children: [{
                path: '/dashboard',
                name: 'dash-board',
                component: dashBoard
            },
            {
                path: '/offer',
                name: 'offer-list',
                component: offerList
            },
            {
                path: '/dashCampaign',
                name: 'dash-campaign-list',
                component: dashCampaignList
            },
            {
                path: '/message',
                name: 'message-list',
                component: messageList
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;