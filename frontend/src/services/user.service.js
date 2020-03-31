import httpService from "./httpService.js";
import storageService from './storage.service.js';

const USER_KEY = 'loggedInUser';

var gLoggedInUser;

async function signUp(user) {
    user = await httpService.post('auth/signup', user.credentials)
    gLoggedInUser = user;
    storageService.store(USER_KEY, gLoggedInUser)
    return gLoggedInUser;
}

async function login(credentials) {
    try {
        const user = await httpService.post('auth/login', credentials)
        gLoggedInUser = user;
        return gLoggedInUser;
    } catch {
        if (!user) {
            throw new Error(`wrong login details`); // didn't find user with that username
        } else if (user.credentials.password !== password) {
            throw new Error(`wrong login pasword details`); // password is incorrect
        }
    }
}

async function logout() {
    await httpService.post('auth/logout');
    gLoggedInUser = null;
    storageService.clear()
}


async function update(user) {
    return httpService.put(`user/${user._id}`, user)
}

async function remove(id) {
    return httpService.delete(`user/${userId}`)
}

async function getLoggedInUser() {
    if (!gLoggedInUser) {
        gLoggedInUser = storageService.load(USER_KEY)
    }
    return gLoggedInUser;
}

export default {
    signUp,
    login,
    logout,
    getLoggedInUser,
    update,
    remove
}