const fs = require('fs');

import storageService from './storage.service.js';

const KEY = 'influencers';

var gInfluencers = _getInfluencersFromStorage();


function _getInfluencersFromStorage(){
    var influencers = storageService.load(KEY);
    if(!influencers){
        influencers = require('../../data/influencers.json');
        storageService.store(KEY, influencers)
    }
    return influencers
}
function query(filterBy = {}) {
    return Promise.resolve(gInfluencers);
}

async function getById(id) {
    return gInfluencers.find(influencer => influencer._id === id);

}

function remove(id) {
    const idx = gInfluencers.findIndex(influencer => influencer._id === id);

    gInfluencers.splice(idx, 1);
    storageService.store(KEY, gInfluencers)

    return Promise.resolve();
}

async function add(influencer) {
    influencer.createdAt = Date.now();
    gInfluencers.unshift(influencer);
    await storageService.store(KEY, gInfluencers)

    return influencer
}

function update(influencer) {
    const idx = gInfluencers.findIndex(currInfluencer => currInfluencer._id === influencer._id);

    influencer.updatedAt = Date.now();
    gInfluencers.splice(idx, 1, influencer);
    storageService.store(KEY, gInfluencers)

    return Promise.resolve(influencer);
}

export default {
    query,
    getById,
    remove,
    add,
    update
}