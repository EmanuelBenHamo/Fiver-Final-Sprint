const dbService = require("../../services/db.service");
// const mongoDBCriteria = require('./mongoDB.criteria.js')


module.exports = {
    query,
    // getById,
    remove,
    update,
    add
};
var gMessages = []

async function query(filterBy = {}) {
    const collection = await dbService.getCollection("message");
    try {
        let messages;
        // if (filterBy.topRated) {
        //     const topRated = await mongoDBCriteria.getTopRated(filterBy);
        //     messages = await collection.find(topRated).limit(+filterBy.topRated).toArray();
        // } else {
        // }
        // const criteria = await mongoDBCriteria.buildCriteria(filterBy);
        messages = await collection.find(criteria).toArray();
        // console.log(messages);
        return messages;
    } catch (err) {
        console.log("ERROR: cannot find messages");
        throw err;
    }
}

async function remove(messageId) {
    console.log(messageId);
    const collection = await dbService.getCollection("message");
    try {
        await collection.deleteOne({ _id: ObjectId(messageId) });
    } catch (err) {
        console.log(`ERROR: cannot remove message ${messageId}`);
        throw err;
    }
}

async function update(message) {
    const collection = await dbService.getCollection("message");
    message._id = ObjectId(message._id);
    try {
        await collection.replaceOne({ _id: message._id }, { $set: message });
        return message;
    } catch (err) {
        console.log(`ERROR: cannot update message ${message._id}`);
        throw err;
    }
}

async function add(message) {
    gMessages.push(message);
    // console.log(gMessages);
    const collection = await dbService.getCollection("message");
    try {
        await collection.insertOne(message);
        return message;
    } catch (err) {
        console.log(`ERROR: cannot insert message`);
        throw err;
    }
}