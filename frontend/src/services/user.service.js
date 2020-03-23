import storageService from './storage.service.js';

const USERS_KEY = 'users';

var gUsers = _loadUsers();
var gLoggedInUser;

async function query({userType}) {
    return gUsers.filter(user => user.credentials.userType === userType);
}

async function signUp(user) {
    const { username, password, type } = user.credentials;

    if (_isUsernameTaken(username)) {
        throw new Error('username already taken');
    }

    _add(user);
    gLoggedInUser = user;
    storageService.store('loggedInUser', gLoggedInUser)

    return gLoggedInUser;
}

async function login(credentials) {
    
    const { username, password } = credentials;
    const user = gUsers.find(user => {
        return user.credentials.username === username
    });

    if (!user) {
        throw new Error(`wrong login details`); // didn't find user with that username
    } 
    else if (user.credentials.password !== password) {
        throw new Error(`wrong login pasword details`); // password is incorrect
    }

    gLoggedInUser = user;
    storageService.store('loggedInUser', gLoggedInUser)
    return gLoggedInUser;
}

async function logout() {
    gLoggedInUser = null;
    localStorage.removeItem('loggedInUser');
}

async function getLoggedInUser() {
    if(!gLoggedInUser){
        gLoggedInUser = storageService.load('loggedInUser')
    }
    return gLoggedInUser;
}

async function update(user) {
    const idx = gUsers.findIndex(currUser => currUser._id === user._id);
    gUsers.splice(idx, 1, user);

   return user;
}

async function remove(id) {
    const idx = gUsers.findIndex(currUser => currUser._id === user._id);
    gUsers.splice(idx, 1);
}

export default {
    query,
    signUp,
    login,
    logout,
    getLoggedInUser,
    update,
    remove
}

async function _loadUsers() {
    gUsers = await storageService.load(USERS_KEY);
    
    if (!gUsers) {
        let influencers = require('../../data/influencers.json');
        let brands = require('../../data/brands.json');
        gUsers = await [...brands, ...influencers];
        storageService.store(USERS_KEY, gUsers);
    }
}

async function _add(user) {
    gUsers.unshift(user);
    storageService.store(USERS_KEY, gUsers);
}

function _isUsernameTaken(username) {
    return gUsers.some(user => user.username === username);
}

function _makeId() {
    return Math.round(Math.random() * 1000);
}