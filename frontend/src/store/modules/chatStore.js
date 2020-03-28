import { utilService } from '../services/util.service.js'

export const chatStore = {
    state: {
        messages: [],
    },
    getters: {
        messages(state) {
            return state.messages
        },
    },

}