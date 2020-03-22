import offerService from '../../services/offer.service.js';

export default {
    state:{
        offers: null
    },
    getters:{
        
    },
    mutations:{
        setOffers(state, {offers}){
            state.offers = offers
        }
    },
    actions: {
        async sendOffer(context ,payload){
            return await offerService.add(payload)
        },
        async loadOffers(context){
            const offers = await offerService.query();
            context.commit({
                type: 'setOffers',
                offers
            })
            return offers
        }
    }
}