const dbService = require("../../services/db.service");

module.exports = {
    query,
    remove,
    update,
    add
};
var gMessages = []

async function query(filterBy = {}) {
    const collection = await dbService.getCollection("message");
    try {
        let messages;
        const criteria = { to: filterBy.userId };
        messages = await collection.find(criteria).toArray();
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
    const collection = await dbService.getCollection("message");
    try {
        await collection.insertOne(message);
        return message;
    } catch (err) {
        console.log(`ERROR: cannot insert message`);
        throw err;
    }
}