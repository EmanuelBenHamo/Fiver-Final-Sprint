const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    query,
    getById,
    remove,
    update,
    add
}

async function query(filterBy = {}) {
    const criteria = _buildCriteria(filterBy)
    const collection = await dbService.getCollection('campaign')
    try {
        let campaigns = await collection.find(criteria).toArray();
        campaigns.forEach(campaign => delete campaign.password);
        return campaigns
    } catch (err) {
        console.log('ERROR: cannot find campaigns')
        throw err;
    }
}

async function getById(campaignId) {
    const collection = await dbService.getCollection('campaign')
    try {
        let campaign = await collection.findOne({ "_id": ObjectId(campaignId) })
            // delete campaign.password;
        return campaign;
    } catch (err) {
        console.log(`ERROR: while finding campaign ${campaignId}`)
        throw err;
    }
}

async function remove(campaignId) {
    const collection = await dbService.getCollection('campaign')
    try {
        await collection.deleteOne({ "_id": ObjectId(campaignId) })
    } catch (err) {
        console.log(`ERROR: cannot remove campaign ${campaignId}`)
        throw err;
    }
}

async function update(campaign) {
    const collection = await dbService.getCollection('campaign')
    campaign._id = ObjectId(campaign._id);
    try {
        await collection.replaceOne({ "_id": campaign._id }, { $set: campaign })
        return campaign
    } catch (err) {
        console.log(`ERROR: cannot update campaign ${campaign._id}`)
        throw err;
    }
}

async function add(campaign) {
    const collection = await dbService.getCollection('campaign')
    try {
        await collection.insertOne(campaign);
        return campaign;
    } catch (err) {
        console.log(`ERROR: cannot insert campaign`)
        throw err;
    }
}

function _buildCriteria(filterBy) {
    const criteria = {};
    if (filterBy.txt) {
        criteria.description = filterBy.txt
    }
    return criteria;
}