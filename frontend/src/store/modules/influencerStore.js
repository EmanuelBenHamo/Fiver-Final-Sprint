import influencerService from '../../services/influencer.service.js';
export default {
    state:{},
    mutations:{
    
    },
    actions: {
        async getInfluencerById(context, {influencerId}){
            return await influencerService.getById(influencerId)
        },
        async addInfluencer(context, {influencer}){
            return await influencerService.add(influencer)
        }
    }
}