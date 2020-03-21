import storageService from './storage.service.js';

const USERS_KEY = 'users';

var gUsers = _loadUsers();
var gLoggedInUser;

async function query(userType) {
    return gUsers.filter(user.type === userType);
}

async function signUp(credentials) {
    const { username, password, type } = credentials;

    if (_isUsernameTaken(username)) {
        throw new Error('username already taken');
    }

    const user = { username, password, type };
    user._id = _makeId();
    _add(user);
    gLoggedInUser = user;

    return gLoggedInUser;
}

async function login(credentials) {
    const { username, password } = credentials;
    const user = gUsers.find(user => user.username === username);

    if (!user) {
        throw new Error(`wrong login details`); // didn't find user with that username
    } else if (user.password !== password) {
        throw new Error(`wrong login details`); // password is incorrect
    }

    gLoggedInUser = user;

    return gLoggedInUser;
}

async function logout() {
    gLoggedInUser = null;
}

async function getLoggedInUser() {
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
    gUsers = storageService.load(USERS_KEY);
    
    if (!gUsers) {
        let influencers = require('../../data/influencers.json');
        let brands = require('../../data/brands.json');
        gUsers = [...brands, ...influencers];
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