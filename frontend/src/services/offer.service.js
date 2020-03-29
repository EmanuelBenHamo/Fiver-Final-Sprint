const fs = require('fs');

import storageService from './storage.service.js';

const KEY = 'offers';

var gOffers = _getOffersFromStorage();


function _getOffersFromStorage() {
    var offers = storageService.load(KEY);
    if (!offers) {
        offers = require('../../data/offers.json');
        storageService.store(KEY, offers)
    }
    return offers
}

async function query(filterBy = {}) {
    let filteredOffers = gOffers.filter(offer => offer.miniInfluencer.id === filterBy.influencerId)
    return await filteredOffers;
}

function getById(id) {
    const offer = gOffers.find(offer => offer._id === id);

    return offer;
}

function remove(id) {
    const idx = gOffers.findIndex(offer => offer._id === id);

    gOffers.splice(idx, 1);
    storageService.store(KEY, gOffers)
    return Promise.resolve();
}

async function add(payload) {

    var offer = await _createOffer(payload)
    gOffers.unshift(offer);
    storageService.store(KEY, gOffers)

    return await offer;
}

function update({ offerData }) {
    console.log(offerData)
    const idx = gOffers.findIndex(currOffer => currOffer._id === offerData.id);
    console.log(idx)
        // offer.updatedAt = Date.now();
        // gOffers.splice(idx, 1, offer);
        // storageService.store(KEY, gOffers);
        // return Promise.resolve(offer);
}

async function _createOffer({ campaign, influencer }) {
    const newOffer = {
        _id: Math.floor(Math.random() * 1000000 + 10000),
        status: 'pending',
        description: campaign.description,
        miniCampaign: {
            id: campaign._id,
            product: campaign.product,
            startDate: campaign.startDate,
            endDate: campaign.endDate,
        },
        miniInfluencer: {
            id: influencer._id,
            firstName: influencer.firstName,
            lastName: influencer.lastName
        },
        createdAt: Date.now()
    };
    return newOffer;
}

export default {
    query,
    getById,
    remove,
    add,
    update,
}

// function _saveOffersToFile() {
//     fs.writeFileSync('data/offers.json', JSON.stringify(gOffers, null, 2));
// }