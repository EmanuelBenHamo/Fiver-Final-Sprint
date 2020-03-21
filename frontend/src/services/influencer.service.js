const fs = require('fs');

var gInfluencers = require('../../data/influencers.json');

function query(filterBy = {}) {
    return Promise.resolve(gInfluencers);
}

function getById(id) {
    const influencer = gInfluencers.find(influencer => influencer._id === id);

    return influencer;
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

module.exports = {
    query,
    getById,
    remove,
    add,
    update
}

function _saveInfluencersToFile() {
    fs.writeFileSync('../data/influencers.json', JSON.stringify(gInfluencers, null, 2));
}