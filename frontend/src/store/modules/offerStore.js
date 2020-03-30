import offerService from '../../services/offer.service.js';

export default {
    state: {
        offers: null
    },
    getters: {
        offer(state) {
            return state.offers;
        }
    },
    mutations: {
        setOffers(state, { offers }) {
            state.offers = offers
        },
        updateOffer(state, { offerStatus }) {

        }
    },
    actions: {
        async updateOffer(context, payload) {
            return await offerService.update(payload)
        },
        async sendOffer(context, payload) {
            return await offerService.add(payload)
        },
        async loadOffers(context, { influencerId }) {
            const offers = await offerService.query({ influencerId });
            context.commit({
                type: 'setOffers',
                offers
            })
            return offers
        }
    }
}