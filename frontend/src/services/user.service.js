import storageService from './storage.service.js';

const USERS_KEY = 'users';

var gUsers = loadUsers();
var gLoggedInUser;

async function loadUsers() {
    gUsers = storageService.load(USERS_KEY);

    return gUsers;
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

async function signUp(credentials) {
    const { username, password, type } = credentials;

    if (_isUsernameTaken(username)) {
        throw new Error('username already taken');
    }

    const user = { username, password, type };
    user._id = _makeId();

    gUsers.unshift(user);
    storageService.store(USERS_KEY, gUsers);
    gLoggedInUser = user;
    return gLoggedInUser;
}

export default {
    signUp,
    login,
    logout,
    getLoggedInUser
}

function _isUsernameTaken(username) {
    return gUsers.some(user => user.username === username);
}

function _makeId() {
    return Math.round(Math.random() * 1000);
}