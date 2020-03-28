const USER_NAME = 'vova';
const PASSWORD = '6oB82lu2SE1ZcNiq'

module.exports = {
    // "dbURL": "mongodb://localhost:27017",
    "dbURL": `mongodb+srv://${USER_NAME}:${PASSWORD}@cluster0-j6k82.mongodb.net/test?retryWrites=true&w=majority`,
}