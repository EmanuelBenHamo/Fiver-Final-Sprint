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
    _saveBrandsToFile();
    return Promise.resolve();
}

function add(brand) {
    brand.createdAt = Date.now();
    gBrands.unshift(brand);
    _saveBrandsToFile();

    return Promise.resolve(brand);
}

function update(brand) {
    const idx = gBrands.findIndex(currBrand => currBrand._id === brand._id);

    brand.updatedAt = Date.now();
    gBrands.splice(idx, 1, brand);
    _saveBrandsToFile();

    return Promise.resolve(brand);
}

export default {
    query,
    getById,
    remove,
    add,
    update
}

function _saveBrandsToFile() {
    fs.writeFileSync('../../data/brands.json', JSON.stringify(gBrands, null, 2));
}