module.exports = {
    userServiceHost: process.env.USER_SERVICE_HOST,
    userServicePort: process.env.USER_SERVICE_PORT,
    userServiceURL: `http://${this.userServiceHost}:${this.userServicePort}/`,
}