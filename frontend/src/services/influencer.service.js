import storageService from './storage.service.js';
import utilService from './util.service.js';

const KEY = 'influencers';

var gInfluencers = _getInfluencersFromStorage();

function _getInfluencersFromStorage() {
    var influencers = storageService.load(KEY);
    if (!influencers) {
        influencers = require('../../data/influencers.json');
        utilService.shuffle(influencers);
        storageService.store(KEY, influencers);
    }
    return influencers;
}
async function query(filterBy) {
    if (!filterBy) return await gInfluencers;
    const influencersToShow = _filterInfluencers(filterBy);
    return await influencersToShow;
}

async function getById(id) {
    return await gInfluencers.find(influencer => influencer._id === id);
}

function remove(id) {
    const idx = gInfluencers.findIndex(influencer => influencer._id === id);

    gInfluencers.splice(idx, 1);
    storageService.store(KEY, gInfluencers);

    return Promise.resolve();
}

async function add(influencer) {
    influencer._id = _randomInt(10000, 10000000) + '';
    influencer.createdAt = Date.now();
    influencer = _setSocialInfo(influencer);
    gInfluencers.unshift(influencer);
    storageService.store(KEY, gInfluencers);

    return influencer;
}

function update(influencer) {
    const idx = gInfluencers.findIndex(
        currInfluencer => currInfluencer._id === influencer._id
    );

    influencer.updatedAt = Date.now();
    gInfluencers.splice(idx, 1, influencer);
    storageService.store(KEY, gInfluencers);

    return Promise.resolve(influencer);
}

export default {
    query,
    getById,
    remove,
    add,
    update
};

function _setSocialInfo(influencer) {
    influencer.socials = influencer.socials.map(social => {
        console.log('social', social);
        var currSocial = {
            type: social,
            menFollowers: _randomInt(10000, 10000000),
            womenFollowers: _randomInt(10000, 10000000),
            posts: _randomInt(1000, 1000000),
            stories: _randomInt(1000, 1000000),
            followersAvgAge: _randomInt(16, 50)
        };
        return currSocial;
    });
    return influencer;
}

function _filterInfluencers(filterBy) {
    var name = new RegExp(filterBy.name, 'i');

    const influencersToShow = gInfluencers
        .filter(influencer => { // FILTER BY NAME
            return influencer.firstName.match(name) || influencer.lastName.match(name);
        })
        .filter(influencer => { // FILTER BY GENDER
            if (filterBy.gender === 'All') return influencer; //Filter by gender
            return filterBy.gender === influencer.gender;
        })
        .filter(influencer => { // FILTER BY AGE
            if (!filterBy.age) return influencer;
            var age = _getAge(influencer.dateOfBirth);
            return (
                filterBy.age[0] < age &&
                filterBy.age[1] > age
            );
        })
        .filter(influencer => { // FILTER BY PRICE
            if (!filterBy.pricePerPost) return influencer;
            return +filterBy.pricePerPost > +influencer.pricePerPost;
        })
        .filter(influencer => { // FILTER BY TAGS
            if (!filterBy.tags || !filterBy.tags.length) return influencer;
            return filterBy.tags.every(tag => {
                return influencer.tags.includes(tag)
            })
        })
        .filter(influencer => { // FILTER BY SOCIAL NETWORK
            if (!filterBy.socials.type || !filterBy.socials.type.length) {
                influencer.filteredSocialMap = influencer.socials
                return influencer
            }
            const filteredSocialMap = influencer.socials.filter(social => {
                var socialType = filterBy.socials.type.filter(filterSocialType => {
                    return social.type === filterSocialType;
                });
                return socialType.length;
            });
            if (filteredSocialMap.length) {
                influencer.filteredSocialMap = filteredSocialMap; // MAPPING ONLY THE RELEVANT SOCIAL NETWORKS
                return influencer;
            }
        })
        .filter(influencer => {
            return influencer.filteredSocialMap.some(social => {
                let followersCount = social.menFollowers + social.womenFollowers;
                let menFollowersPercentage =
                    (social.menFollowers / followersCount) * 100;

                return (+followersCount > filterBy.socials.followersCount[0] && // FILTER BY FOLLOWERS COUNT
                    +followersCount < filterBy.socials.followersCount[1] &&
                    menFollowersPercentage > filterBy.socials.menFollowersPercentage // FILTER BY PERCENTAGE OF MEN FOLLOWERS
                );
            });
        })
        .filter(influencer => {
            if (!filterBy.socials.posts) return influencer;
            return influencer.filteredSocialMap.some(social => {
                return +social.posts > +filterBy.socials.posts; // FILTER BY POSTS
            })
        })
        .filter(influencer => {
            if (!filterBy.socials.stories) return influencer;
            return influencer.filteredSocialMap.some(social => {
                return +social.stories > +filterBy.socials.stories; // FILTER BY STORIES
            })
        })
        .filter(influencer => {
            if (!filterBy.socials.followersAvgAge) return influencer;
            return influencer.filteredSocialMap.some(social => {
                return (
                        social.followersAvgAge >= filterBy.socials.followersAvgAge[0] &&
                        social.followersAvgAge <= filterBy.socials.followersAvgAge[1]
                    ) // FILTER BY FOLLOWERS AGE
            })
        })

    return influencersToShow;
}

function _randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function _getAge(testEpoch) {

    var myDate = new Date(testEpoch * 1000);
    var today = new Date();
    var year = today.getFullYear() - myDate.getFullYear();
    var month = today.getMonth() - myDate.getMonth();
    if (month < 0 || month === 0 && today.getDate() < myDate.getDate()) {
        year--
    }
    return year
}