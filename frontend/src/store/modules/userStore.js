import userService from '../../services/user.service.js';

export default {
  state: {
    loggedInUser: null
  },
  getters: {
    loggedInUser(state) {
      return state.loggedInUser;
    }
  },
  mutations: {
    setLoggedInUser(state, payload) {
      state.loggedInUser = { payload };
    }
  },
  actions: {
    async login(context, payload) {
      const credentials = { payload };
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
        loggedInUser
      });
      return loggedInUser;
    },
    async signup(context, payload) {
      const credentials = { payload };
      const loggedInUser = await userService.signUp(credentials);
      context.commit({
        type: 'setLoggedInUser',
        loggedInUser
      });
      return loggedInUser;
    }
  }
};
