import userService from '../../services/user.service.js';
import campaignService from '../../services/campaign.service.js';

export default {
    state: {
        loggedInUser: null,
        userType: null,
        influencerList: null
    },
    getters: {
        loggedInUser(state) {
            return state.loggedInUser;
        },
        userType(state) {
            return state.userType;
        }
    },
    mutations: {
        setLoggedInUser(state, payload) {
            state.loggedInUser = payload.loggedInUser;
        },
        setUserType(state, payload) {
            state.userType = payload.userType;
        },
        setUserItems(state, payload) {
            state.influencerList = payload.influencerList;
        }
    },
    actions: {
        async setUserType(context, payload) {
            console.log(payload)
            await context.commit(payload);
        },
        async login(context, payload) {
            console.log(payload.credentials)
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
        async signup(context, { user }) {
            const loggedInUser = await userService.signUp(user);
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
                    influencerList: campaignsList
                });
                return campaignsList;

            } else if (context.state.loggedInUser.credentials.userType === "brand") {
                let influencersList = await userService.query({ userType: "influencer" });
                context.commit({
                    type: 'setUserItems',
                    influencerList: influencersList
                });
                return influencersList;
            }
        }
    }
};