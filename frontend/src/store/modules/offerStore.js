import offerService from '../../services/offer.service.js';

export default {
    state:{},
    actions: {
        async sendOffer(context ,{offer}){
            console.log('Offer Sent', offer);
            // return await offerService.add(offer)
            
            // TODO- create an offer format
        }
    }
}