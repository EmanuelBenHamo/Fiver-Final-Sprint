
function store(key, any) {
    localStorage[key] = JSON.stringify(any);
}

function load(key) {
    var str = localStorage[key] || 'null';
    return JSON.parse(str);
}

function clear(key) {
    localStorage.removeItem(key);
}

module.exports = {
    store,
    load,
    clear
}