import influencerService from "../../services/influencer.service.js";

export default {
    state: {
        influencers: []
    },
    mutations: {
        setInfluencers(state, { influencers }) {
            state.influencers = influencers;
        },
    },
    getters: {
        influencers(state) {
            return state.influencers;
        },
    },
    actions: {
        async loadInfluencers(context, {filterBy}) {
            const influencers = await influencerService.query(filterBy)

            context.commit({ type: 'setInfluencers', influencers })
        },

        getEmptyInfluencer() {
            return influencerService.getEmptyInfluencer();
        },
        async getInfluencerById(context, { influencerId }) {
            return await influencerService.getById(influencerId)
        },
        async addInfluencer(context, { influencer }) {
            const user = await influencerService.add(influencer)
            context.dispatch({
                type: 'signup',
                user
            })
            return user;
        }
    },
    modules: {}
};