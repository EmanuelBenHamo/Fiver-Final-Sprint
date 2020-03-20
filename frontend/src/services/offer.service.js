const fs = require('fs');

import storageService from './storage.service.js';

const KEY = 'offers';

var gOffers = _getOffersFromStorage();


function _getOffersFromStorage(){
    var offers = storageService.load(KEY);
    if(!offers){
        offers = require('../../data/offers.json');
        storageService.store(KEY, offers)
    }
    return offers
}

async function query(filterBy = {}) {
    return await gOffers;
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

async function add(offer) {
    gOffers.unshift(offer);
    console.log('Offer has been added', offer);
    storageService.store(KEY, gOffers)
    return await offer;
}

function update(offer) {
    const idx = gOffers.findIndex(currOffer => currOffer._id === offer._id);
    
    offer.updatedAt = Date.now();
    gOffers.splice(idx, 1, offer);
    storageService.store(KEY, gOffers);
    return Promise.resolve(offer);
}

async function createOffer(campaign) {
    const newOffer = {
        _id: Math.floor(Math.random() * 1000000 + 10000),
        status: 'Pendeing',
        description: campaign.description,
        miniCampaign: {
            id: campaign._id,
            product: campaign.product,
            startDate: campaign.startDate,
            endDate: campaign.endDate,
        },
        miniInfluencer: {
            // TODO - Add the current influencer's details
        },
        createdAt: Date.now()
    };
    return await add(newOffer);
}

export default {
    query,
    getById,
    remove,
    add,
    update,
    createOffer
}

// function _saveOffersToFile() {
//     fs.writeFileSync('data/offers.json', JSON.stringify(gOffers, null, 2));
// }