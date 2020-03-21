import userService from '../../services/user.service.js';
import campaignService from '../../services/campaign.service.js';

export default {
    state: {
        loggedInUser: null,
        itemsList: null
    },
    getters: {
        loggedInUser(state) {
            return state.loggedInUser;
        }
    },
    mutations: {
        setLoggedInUser(state, payload) {
            state.loggedInUser = payload.loggedInUser;
        },
        setUserItems(state, payload) {
            state.itemsList = payload.itemsList;
        }
    },
    actions: {
        async login(context, payload) {
            const credentials = payload.credentials;
            const loggedInUser = await userService.login(credentials);
            context.commit({
                type: 'setLoggedInUser',
                loggedInUser
            });
            return loggedInUser;
        },
        async logout(context) {
            await userService.logout();
            context.commit({
                type: 'setLoggedInUser',
                loggedInUser: null
            });
            return;
        },
        async signup(context, payload) {
            const credentials = payload.credentials;
            const loggedInUser = await userService.signUp(credentials);

            context.commit({
                type: 'setLoggedInUser',
                loggedInUser
            });
            return loggedInUser;
        },
        async getUserItems(context, payload) {
            if (context.state.loggedInUser.credentials.userType === "influencer") {
                let campaignsList = await campaignService.query();
                context.commit({
                    type: 'setUserItems',
                    itemsList: campaignsList
                });
                return campaignsList;
                
            } else if (context.state.loggedInUser.credentials.userType === "brand") {
                let influencersList = await userService.query({ userType: "influencer" });
                context.commit({
                    type: 'setUserItems',
                    itemsList: influencersList
                });
                return influencersList;
            }
        }
    }
};