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
    storageService.store(KEY, gInfluencers)

    return Promise.resolve();
}

async function add(influencer) {
    influencer.createdAt = Date.now();
    influencer = _setSocialInfo(influencer)
    gInfluencers.unshift(influencer);
    storageService.store(KEY, gInfluencers)
    
    return await influencer;
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

function _setSocialInfo(influencer){
    influencer.socials = influencer.socials.map(social => {
        console.log('social', social);
             var currSocial = {
                type : social,
                menFollowers : _randomInt(10000, 10000000),
                womenFollowers : _randomInt(10000, 10000000),
                posts :_randomInt(1000, 1000000),
                stories : _randomInt(1000, 1000000),
                avgAge: _randomInt(16, 50),
            }
            return currSocial
        })
    return influencer
}

function _randomInt(min , max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}