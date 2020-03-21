import userService from '../../services/user.service.js';

export default {
    state: {
        // loggedInUser: { type: 'influencer' }
        loggedInUser: { type: 'brand' }
    },
    getters: {
        loggedInUser(state) {
            return state.loggedInUser;
        }
    },
    mutations: {
        setLoggedInUser(state, payload) {
            state.loggedInUser = payload.loggedInUser;
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
        }
    }
};