const bcrypt = require('bcrypt')
const influencerService = require('../influencer/influencer.service.js')
const brandService = require('../brand/brand.service.js')
const userService = require('../user/user.service.js');
const logger = require('../../services/logger.service')

const saltRounds = 10

async function login(username, password, userType) {
    
    logger.debug(`auth.service - login with username: ${username}`)
    if (!username || !password) return Promise.reject('username and password are required!')
    
    const user = await userService.getByUsername(username, userType)
    if (!user) return Promise.reject('Invalid username or password')
    // // const match = await bcrypt.compare(password, user.password)
    // if (!match) return Promise.reject('Invalid username or password')
    
    delete user.credentials.password;
    return user;
}

async function signup(username, password) {
    logger.debug(`auth.service - signup with username: ${username}`)
    if (!username || !password) return Promise.reject('username and password are required!')

    const hash = await bcrypt.hash(password, saltRounds)
    return userService.add({ username, password: hash})
}

module.exports = {
    signup,
    login,
}