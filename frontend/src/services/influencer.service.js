import httpService from "./httpService.js";

export default {
    query,
    getById,
    remove,
    add,
    update
};

async function query(filterBy) {
    var queryParams = new URLSearchParams();
    if (filterBy) {
        for (let key in filterBy) {
            if (Array.isArray(filterBy[key])) {
                filterBy[key].forEach(value => {
                    queryParams.append(key, value);
                })
            }
            queryParams.append(key, filterBy[key]);
        }
    }
    return await httpService.get(`influencer?${queryParams}`);
}

async function getById(id) {
    return await httpService.get(`influencer/${id}`);
}

async function remove(id) {
    return await httpService.delete(`influencer/${id}`, id);
}

async function add(influencer) {
    return await httpService.post(`influencer`, influencer)
}

async function update(influencer) {
    return await httpService.put(`influencer/${influencer._id}`, influencer)
}