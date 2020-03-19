const fs = require('fs');

var gOffers = require('../data/offers.json');

function query(filterBy = {}) {
    return Promise.resolve(gOffers);
}

function getById(id) {
    const offer = gOffers.find(offer => offer._id === id);

    return offer;
}

function remove(id) {
    const idx = gOffers.findIndex(offer => offer._id === id);

    gOffers.splice(idx, 1);
    _saveOffersToFile();

    return Promise.resolve();
}

function add(offer) {
    offer.createdAt = Date.now();
    gOffers.unshift(offer);
    _saveOffersToFile();

    return Promise.resolve(offer);
}

function update(offer) {
    const idx = gOffers.findIndex(currOffer => currOffer._id === offer._id);

    offer.updatedAt = Date.now();
    gOffers.splice(idx, 1, offer);
    _saveOffersToFile();

    return Promise.resolve(offer);
}

module.exports = {
    query,
    getById,
    remove,
    add,
    update
}

function _saveOffersToFile() {
    fs.writeFileSync('data/offers.json', JSON.stringify(gOffers, null, 2));
}