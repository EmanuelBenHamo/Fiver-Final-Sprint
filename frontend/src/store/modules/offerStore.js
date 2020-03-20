import offerService from '../../services/offer.service.js';

export default {
    state:{
        offers: null
    },
    getters:{
        getOffers(state){
            return state.offers
        }
    },
    mutations:{
        setOffers(state, {offers}){
            state.offers = offers
        }
    },
    actions: {
        async sendOffer(context ,{campaign}){
            return await offerService.createOffer(campaign)
        },
        async loadOffers(context){
            const offers = await offerService.query();
            context.commit({
                type: 'setOffers',
                offers
            })
        }
    }
}