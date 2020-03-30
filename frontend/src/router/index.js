import Vue from 'vue';
import VueRouter from 'vue-router';
import homePage from '../views/home-page.vue';
import mainApp from '../views/main-app.vue';
import loginPage from '../views/login-page.vue';
import backofficePage from '../views/backoffice-page.vue';
import offerList from '../cmps/offer-list.vue';
import influencerDetails from '../views/influencer-details.vue';
import signupPage from '../views/signup-page.vue';
import messageList from '../cmps/message-list.vue';
import filterCmp from '../cmps/influencer-filter.vue';

Vue.use(VueRouter);

const routes = [{
        path: '/',
        name: 'home-page',
        component: homePage
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
        path: '/influencer/:id',
        name: 'influencer-details',
        component: influencerDetails
    },
    {
        path: '/backoffice/',
        name: 'backoffice-page',
        component: backofficePage,
        children: [{
                path: '/offer/:id?',
                name: 'offer-list',
                component: offerList
            },
            {
                path: '/message/:id?',
                name: 'message-list',
                component: messageList
            }
        ]
    },
    {
        path: '/filter',
        name: 'influencer-filter',
        component: filterCmp
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;