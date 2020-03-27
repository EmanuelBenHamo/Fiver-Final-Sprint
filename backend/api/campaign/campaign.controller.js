const campaignService = require('./campaign.service')

async function getCampaign(req, res) {
    const campaign = await campaignService.getById(req.params.id)
    res.send(campaign)
}

async function getCampaigns(req, res) {
    const campaigns = await campaignService.query(req.query)
    res.send(campaigns)
}

async function addCampaign(req, res) {
    const campaign = await campaignService.add(req.query)
    res.send(campaign)
}

async function deleteCampaign(req, res) {
    await campaignService.remove(req.params.id)
    res.end()
}

async function updateCampaign(req, res) {
    const campaign = req.body;
    await campaignService.update(campaign)
    res.send(campaign)
}

module.exports = {
    getCampaign,
    getCampaigns,
    addCampaign,
    deleteCampaign,
    updateCampaign
}