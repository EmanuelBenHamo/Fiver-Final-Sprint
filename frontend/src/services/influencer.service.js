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
    return await gInfluencers.find(influencer => influencer._id === id);

}

function remove(id) {
    const idx = gInfluencers.findIndex(influencer => influencer._id === id);

    gInfluencers.splice(idx, 1);
    _saveInfluencersToFile();

    return Promise.resolve();
}

function add(influencer) {
    influencer.createdAt = Date.now();
    gInfluencers.unshift(influencer);
    _saveInfluencersToFile();

    return Promise.resolve(influencer);
}

function update(influencer) {
    const idx = gInfluencers.findIndex(currInfluencer => currInfluencer._id === influencer._id);

    influencer.updatedAt = Date.now();
    gInfluencers.splice(idx, 1, influencer);
    _saveInfluencersToFile();

    return Promise.resolve(influencer);
}

export default {
    query,
    getById,
    remove,
    add,
    update
}

function _saveInfluencersToFile() {
    fs.writeFileSync('../data/influencers.json', JSON.stringify(gInfluencers, null, 2));
}