const messageService = require('./message-service')
const GET_USER_MESSAGES = "GET_USER_MESSAGES";
const USER_MESSAGES = "USER_MESSAGES";


module.exports = connectSockets

var messages = []

function connectSockets(io) {
    io.on('connection', socket => {
        socket.on(GET_USER_MESSAGES, async userId => {
            let userInboxMsgs = await messageService.query({ userId });
            let userMsgs = messages.find(msg => msg.to === userId)
            socket.emit(USER_MESSAGES, messages)
        })
        socket.on("ADD_MESSAGE", offer => {
            // console.log(offer)
            messageService.add(offer);
            messages.push(offer)
            io.to(socket.notificationMsg).emit(USER_MESSAGES, offer)
        })
        socket.on('MESSAGE_SESSION', user => {
            if (socket.notificationMsg) {
                socket.leave(socket.notificationMsg)
            }
            socket.join(user)
            socket.notificationMsg = user;
        })
    })
}