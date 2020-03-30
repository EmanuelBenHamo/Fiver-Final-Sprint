const messageService = require('./message-service')

const USER_CONNECTED = "USER_CONNECTED";
const USER_DISCONNECTED = "USER_DISCONNECTED";
const MESSAGE_SENT = "MESSAGE_SENT";
const MESSAGE_RECIEVED = "MESSAGE_RECIEVED";
const TYPING = "TYPING";
const VERIFY_USER = "VERIFY_USER";
const LOGOUT = "LOGOUT";
const PRIVATE_MESSAGE = "PRIVATE_MESSAGE";
const USER_MESSAGES = "USER_MESSAGES";


module.exports = connectSockets

var sockets = {}; /// users connected to server via apps/browsers

function connectSockets(io) {
    io.on('connection', socket => {
        socket.on(PRIVATE_MESSAGE, offer => {
            console.log(offer)
            messageService.add(offer);
        })
        socket.on(USER_MESSAGES, userId => {
            let userInboxMsgs = messageService.query();
            console.log(userInboxMsgs)
                // io.emit(USER_MESSAGES, userInboxMsgs)
        })
    })
}