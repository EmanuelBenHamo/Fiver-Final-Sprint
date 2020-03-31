const messageService = require('./message-service')
const GET_USER_MESSAGES = "GET_USER_MESSAGES";
const USER_MESSAGES = "USER_MESSAGES";
const USER_NEW_MESSAGE = "USER_NEW_MESSAGE";

module.exports = connectSockets

function connectSockets(io) {
    io.on('connection', socket => {
        socket.on(GET_USER_MESSAGES, async userId => {
            let userInboxMsgs = await messageService.query({ userId });
            socket.emit(USER_MESSAGES, userInboxMsgs)
        })
        socket.on("ADD_MESSAGE", offer => {
            messageService.add(offer);
            io.to(socket.myTopic).emit(USER_NEW_MESSAGE, offer)
        })
        socket.on('MSG_TOPIC', topic => {
            if (socket.myTopic) {
                socket.leave(socket.myTopic)
            }
            socket.join(topic)
            socket.myTopic = topic;
        })
    })
}