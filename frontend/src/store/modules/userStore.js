import userService from '../../services/user.service.js';
import campaignService from '../../services/campaign.service.js';

export default {
    state: {
        loggedInUser: null,
        demoInfluencer: null,
        userMessages: [],
        demoBrand: null,
        influencerList: null
    },
    getters: {
        loggedInUser(state) {
            return state.loggedInUser;
        },
        demoInfluencer(state) {
            return state.demoInfluencer
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
        },
        demoLogin(state, payload) {
            state.demoInfluencer = payload.credentials;
        },
        setUserMessages(state, payload) {
            state.userMessages = payload.messageList;
        }
    },
    actions: {
        async setUserType(context, payload) {
            await context.commit(payload);
        },
        async login(context, payload) {
            const credentials = payload.credentials;
            const loggedInUser = await userService.login(credentials);
            context.commit({
                type: 'setLoggedInUser',
                loggedInUser
            });
            return loggedInUser;
        },
        async demoLogin(context, payload) {
            const credentials = payload.credentials;
            context.commit({
                type: 'demoLogin',
                credentials
            })
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
            console.log(payload)
            const loggedInUser = await userService.signUp();
            context.commit({
                type: 'setLoggedInUser',
                loggedInUser
            });
            return loggedInUser;
        },
        async getUserMessages(context, { user }) {
            let messageList = await userService.userMessages(user);
            context.commit({
                type: 'setUserMessages',
                // influencerList: 
                messageList
            });
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
        },
        async getLoggedInUser(context) {
            if (!context.state.loggedInUser) {
                const loggedInUser = await userService.getLoggedInUser()
                context.state.loggedInUser = loggedInUser;
            }
            return context.state.loggedInUser;
        }
    }
};