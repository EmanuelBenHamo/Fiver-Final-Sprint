const fs = require('fs');

import storageService from './storage.service.js';

const KEY = 'Campaigns'

var gCampaigns = _getCampaignsFromStorage();


function _getCampaignsFromStorage(){
    var campaigns = storageService.load(KEY);
    if(!campaigns){
        campaigns = require('../../data/campaigns.json');
        storageService.store(KEY, campaigns)
    }
    return campaigns
}

function query(filterBy = {}) {
    return Promise.resolve(gCampaigns);
}

async function getById(id) {
    const campaign = await gCampaigns.find(campaign => campaign._id === +id);
    return campaign;
}

async function remove(id) {
    const idx = gCampaigns.findIndex(campaign => campaign._id === id);
    await gCampaigns.splice(idx, 1);
    await storageService.store(KEY, gCampaigns)
    return;
}

async function add(campaign) {
    campaign._id =  Math.floor(Math.random() * 1000000 + 10000);
    campaign.createdAt = Date.now();
    await gCampaigns.unshift(campaign);
    await storageService.store(KEY, gCampaigns)
    return Promise.resolve(campaign);
}

function update(campaign) {
    const idx = gCampaigns.findIndex(currCampaign => currCampaign._id === campaign._id);

    campaign.updatedAt = Date.now();
    gCampaigns.splice(idx, 1, campaign);
    storageService.store(KEY, gCampaigns)

    return Promise.resolve(campaign);
}

function getEmptyCampaign() {
    const campaign = {
        name: "",
        product: "",
        startDate: "",
        endDate: "",
        budget: 0,
        description: "",
        audience: {
          minAge: 0,
          maxAge: 0,
          targets: [],
          gender: {
            menOnly: false,
            womenOnly: false
          }
        }
      };
      return campaign;
    }

export default {
    query,
    getById,
    remove,
    add,
    update,
    getEmptyCampaign
}

// function _saveCampaignsToFile() {
//     fs.writeFileSync('../data/campaigns.json', JSON.stringify(gCampaigns, null, 2));
// }