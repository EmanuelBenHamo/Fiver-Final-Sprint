import influencerService from '../../services/influencer.service.js';
export default {
    state:{},
    mutations:{
    
    },
    actions: {
        async getInfluencerById(context, {influencerId}){
            return await influencerService.getById(influencerId)
        },
        async saveInfluencer(context, {user}){
            return await influencerService.add(user)
        }
    }
}