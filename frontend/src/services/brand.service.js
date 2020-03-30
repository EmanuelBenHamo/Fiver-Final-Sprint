import httpService from "./httpService.js";

async function query() {
    return await httpService.get('brand')
}

async function getById(id) {
    return await httpService.get(`brand/${id}`)
}

async function remove(id) {
return await httpService.delete(`brand/${id}`,id)
}

async function add(brand) {
    brand.createdAt = Date.now();
    brand = _setBrandInfo(brand)
    return await httpService.post(`brand`,brand)
}

async function update(brand) {
    brand.updatedAt = Date.now();
    return await httpService.put(`brand/${brand._id}`,brand)    
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