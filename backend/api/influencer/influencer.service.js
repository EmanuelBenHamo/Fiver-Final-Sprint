const dbService = require("../../services/db.service");
const  mongoDBCriteria = require('./mongoDB.criteria.js')
const ObjectId = require("mongodb").ObjectId;

module.exports = {
  query,
  getById,
  remove,
  update,
  add
};

async function query(filterBy = {}) {
	
	const collection = await dbService.getCollection("influencer");
  try {
		let influencers;
		if(filterBy.topRated){
			const topRated = await mongoDBCriteria.getTopRated(filterBy);
			influencers = await collection.find(topRated).limit(+filterBy.topRated).toArray();
		}else {
			const criteria = await mongoDBCriteria.buildCriteria(filterBy);
			influencers = await collection.find(criteria).toArray();
		}
		console.log(influencers);
		
    return influencers;
  } catch (err) {
    console.log("ERROR: cannot find influencers");
    throw err;
  }
}

async function getById(influencerId) {
  const collection = await dbService.getCollection("influencer");
  try {
		let influencer = await collection.findOne({ _id: ObjectId(influencerId) });
    return influencer;
  } catch (err) {
    console.log(`ERROR: while finding influencer ${influencerId}`);
    throw err;
  }
}

async function remove(influencerId) {
  console.log(influencerId);
  const collection = await dbService.getCollection("influencer");
  try {
    await collection.deleteOne({ _id: ObjectId(influencerId) });
  } catch (err) {
    console.log(`ERROR: cannot remove influencer ${influencerId}`);
    throw err;
  }
}

async function update(influencer) {
  const collection = await dbService.getCollection("influencer");
  influencer._id = ObjectId(influencer._id);
  try {
    await collection.replaceOne({ _id: influencer._id }, { $set: influencer });
    return influencer;
  } catch (err) {
    console.log(`ERROR: cannot update influencer ${influencer._id}`);
    throw err;
  }
}

async function add(influencer) {
  console.log(influencer);
  const collection = await dbService.getCollection("influencer");
  try {
    await collection.insertOne(influencer);
    return influencer;
  } catch (err) {
    console.log(`ERROR: cannot insert influencer`);
    throw err;
  }
}