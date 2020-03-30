const messageService = require('./message-service')
const USER_CONNECTED = "USER_CONNECTED";
const USER_DISCONNECTED = "USER_DISCONNECTED";
const MESSAGE_SENT = "MESSAGE_SENT";
const MESSAGE_RECIEVED = "MESSAGE_RECIEVED";
const TYPING = "TYPING";
const VERIFY_USER = "VERIFY_USER";
const LOGOUT = "LOGOUT";
const PRIVATE_MESSAGE = "PRIVATE_MESSAGE";
const GET_USER_MESSAGES = "GET_USER_MESSAGES";
const USER_MESSAGES = "USER_MESSAGES";


module.exports = connectSockets

function connectSockets(io) {
    io.on('connection', socket => {
        socket.on(PRIVATE_MESSAGE, offer => {
            messageService.add(offer);
        })
        socket.on('GET_USER_MESSAGES', async userId => {
            let userInboxMsgs = await messageService.query({ userId });
            socket.emit("USER_MESSAGES", userInboxMsgs)
        })
    })
}