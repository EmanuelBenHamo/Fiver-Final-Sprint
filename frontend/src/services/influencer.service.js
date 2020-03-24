import storageService from './storage.service.js';

const KEY = 'influencers';

var gInfluencers = _getInfluencersFromStorage();

function _getInfluencersFromStorage() {
  var influencers = storageService.load(KEY);
  if (!influencers) {
    influencers = require('../../data/influencers.json');
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
      avgAge: _randomInt(16, 50)
    };
    return currSocial;
  });
  return influencer;
}

function _filterInfluencers(filterBy) {
  var name = new RegExp(filterBy.name, 'i');

  const influencersToShow = gInfluencers
    .filter(influencer => {
      // Filter by name
      return (
        influencer.firstName.match(name) || influencer.lastName.match(name)
      );
    })
    .filter(influencer => {
      if (filterBy.gender === 'All') return influencer; //Filter by gender
      return filterBy.gender === influencer.gender;
    })
    .filter(influencer => {
      if (!filterBy.pricePerPost) return influencer; //Filter by price per post
      return +filterBy.pricePerPost > +influencer.pricePerPost;
    })
    .filter(influencer => {
      if (!filterBy.socials.type || !filterBy.socials.type.length){
          influencer.filteredSocialMap = influencer.socials
          return influencer
      }
      const filteredSocialMap = influencer.socials.filter(social => {
        var socialType = filterBy.socials.type.filter(filterSocialType => { 
          // filterBy.socials.type is an Array of types
          return social.type === filterSocialType;
        });
        return socialType.length;
      });
      if (filteredSocialMap.length) {
        influencer.filteredSocialMap = filteredSocialMap;
        return influencer;
      }
    })
    .filter(influencer => {
      return influencer.filteredSocialMap.some(social => {
        // is true if at least one of the social media stats is true
        let followersCount = social.menFollowers + social.womenFollowers;
        let menFollowersPercentage =
          (social.menFollowers / followersCount) * 100;

        return (
          +followersCount > filterBy.socials.followersCount[0] &&
          +followersCount < filterBy.socials.followersCount[1] &&
          menFollowersPercentage > filterBy.socials.menFollowersPercentage
        );
      });
    })
    .filter(influencer => {
        if(!filterBy.socials.posts) return influencer;
        influencer.filteredSocialMap.some( social => {
            console.log('SOCIAL IN POSTS FILTER', social);
            
            return +social.posts > +filterBy.socials.posts;
        })
    })
    .filter(influencer => {
        if(!filterBy.socials.stories) return influencer;
        influencer.filteredSocialMap.some( social => {
            return +social.stories > +filterBy.socials.stories;
        })
    })
    .filter(influencer => {
        if(!filterBy.socials.followersAvgAge) return influencer;
        influencer.filteredSocialMap.some( social => {
            return +social.followersAvgAge > +filterBy.socials.followersAvgAge;
        })
    })
    
  return influencersToShow;
}

function _randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
