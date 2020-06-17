module.exports = {
    serverPort: process.env.PORT  || 6000,
    saltRounds: process.env.SALT_ROUNDS || 10,
    dbUsername: process.env.DB_USERNAME,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbPort: process.env.DB_PORT
}