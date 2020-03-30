const fs = require('fs');
import httpService from "./httpService.js";

async function query(filterBy = {}) {
    var queryParams = new URLSearchParams();
    queryParams.append(filterBy._id)
    return await httpService.get(`offer?${queryParams}`);
}

async function getById(id) {
    return await httpService.get(`offer/${id}`);
}

async function remove(id) {
    return await httpService.delete(`offer/${id}`, id);
}

async function add(influencer) {
    var offer = await _createOffer(influencer)
    return await httpService.post(`offer`, offer)
}

async function update({ offerData }) {
    return await httpService.put(`offer/${offer._id}`, offerData)
}

function _createOffer(influencer) {
    const newOffer = {
        _id: Math.floor(Math.random() * 1000000 + 10000),
        status: 'pending',
        miniInfluencer: {
            id: influencer._id,
            firstName: influencer.firstName,
            lastName: influencer.lastName
        },
        miniBrand: {
            id: brand._id,
            name:brand.name
        },
        createdAt: Date.now()
    };
    return newOffer;
}

export default {
    query,
    getById,
    remove,
    add,
    update,
}