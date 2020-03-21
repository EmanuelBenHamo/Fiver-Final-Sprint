// const fs = require('fs');

import storageService from './storage.service.js';

const KEY = 'Brands'

var gBrands = _getBrandsFromStorage();

function _getBrandsFromStorage() {
    var brands = storageService.load(KEY);
    if (!brands) {
        brands = require('../../data/brands.json');
        storageService.store(KEY, brands)
    }
    return brands
}
function query() {
    return Promise.resolve(gBrands);
}

function getById(id) {
    const brand = gBrands.find(brand => brand._id === id);
    return brand;
}

function remove(id) {
    const idx = gBrands.findIndex(brand => brand._id === id);

    gBrands.splice(idx, 1);
    storageService.store(KEY, gBrands)
    return Promise.resolve();
}

async function add(brand) {
    brand._id = influencer._id = _randomInt(10000, 10000000)
    brand.createdAt = Date.now();
    console.log('Before', brand);
    brand = _setBrandInfo(brand)
    console.log('After', brand);
    
    gBrands.unshift(brand);
    storageService.store(KEY, gBrands)

    return await brand;
}

function update(brand) {
    const idx = gBrands.findIndex(currBrand => currBrand._id === brand._id);

    brand.updatedAt = Date.now();
    gBrands.splice(idx, 1, brand);
    storageService.store(KEY, gBrands)

    return Promise.resolve(brand);
}

export default {
    query,
    getById,
    remove,
    add,
    update
}

function _setBrandInfo(brand){
    brand.customerCount = _randomInt(1000000, 1000000000) 
    brand.marketValue = _randomInt(1000000, 10000000000) 
    return brand
}

function _randomInt(min , max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}