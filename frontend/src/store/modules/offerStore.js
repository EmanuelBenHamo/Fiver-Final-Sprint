import offerService from '../../services/offer.service.js';

export default {
    state:{},
    mutations:{
        
    },
    actions: {
        async sendOffer(context ,{campaign}){
            return await offerService.createOffer(campaign)
            // TODO- create an offer format
        }
    }
}