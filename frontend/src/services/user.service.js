import storageService from './storage.service.js';

const gLoggedInUser;

const USERS_KEY = 'users';
var gUsers = loadUsers();

async function loadUsers() {
    gUsers = storageService.load(USERS_KEY);

    return gUsers;
}

async function login(user) {
    gLoggedInUser = user;

    return gLoggedInUser;
}

async function logout() {
    gLoggedInUser = null;

    return;
}

async function getLoggedInUser() {
    return gLoggedInUser;
}

async function signUp(credentials) {
    const { username, password, type } = credentials;
    const user = { username, password, type };
    user._id = _makeId();

    gUsers.unshift(gUsers);
    storageService.store(USERS_KEY, gUsers);
}

export default {
    signUp,
    login,
    logout,
    getLoggedInUser
}

function _makeId() {
    return Math.round(Math.random() * 1000);
}