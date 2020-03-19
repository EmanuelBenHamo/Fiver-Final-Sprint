const fs = require('fs');

var gCampaigns = require('../data/campaigns.json');

function query(filterBy = {}) {
    return Promise.resolve(gCampaigns);
}

function getById(id) {
    const campaign = gCampaigns.find(campaign => campaign._id === id);

    return campaign;
}

function remove(id) {
    const idx = gCampaigns.findIndex(campaign => campaign._id === id);

    gCampaigns.splice(idx, 1);
    _saveCampaignsToFile();

    return Promise.resolve();
}

function add(campaign) {
    campaign.createdAt = Date.now();
    gCampaigns.unshift(campaign);
    _saveCampaignsToFile();

    return Promise.resolve(campaign);
}

function update(campaign) {
    const idx = gCampaigns.findIndex(currCampaign => currCampaign._id === campaign._id);

    campaign.updatedAt = Date.now();
    gCampaigns.splice(idx, 1, campaign);
    _saveCampaignsToFile();

    return Promise.resolve(campaign);
}

module.exports = {
    query,
    getById,
    remove,
    add,
    update
}

function _saveCampaignsToFile() {
    fs.writeFileSync('../data/campaigns.json', JSON.stringify(gCampaigns, null, 2));
}