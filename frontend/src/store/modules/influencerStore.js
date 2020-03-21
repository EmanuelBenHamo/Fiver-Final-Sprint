import influencerService from '../../services/influencer.service.js';
export default {
    state:{},
    mutations:{
    
    },
    actions: {
        async getinfluencerById(context, {influencerId}){
            return await influencerService.getById(influencerId)
        }
    }
}