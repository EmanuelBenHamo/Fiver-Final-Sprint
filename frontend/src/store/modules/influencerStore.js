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
        async loadInfluencers(context) {
            const influencers = await influencerService.query()
            context.commit({ type: 'setInfluencers', influencers })
        },
     
        getEmptyInfluencer() {
            return influencerService.getEmptyInfluencer();
        },
        async getInfluencerById(context, { influencerId }) {
            return await influencerService.getById(influencerId)
        },
        async addInfluencer(context, {influencer}){
            return await influencerService.add(influencer)
        }
    },
    modules: {}
};
