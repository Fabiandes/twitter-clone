const UserService = require('./service');
const keys = require('./keys')
const dbUrl = `mongodb://${keys.dbUsername}:${keys.dbPassword}@${keys.dbHost}:${keys.dbPort}/${keys.dbName}`

const fastify = require('fastify')();
const fp = require('fastify-plugin')

async function decorateFastify(){
    const db = fastify.mongo.db
    const userCollection = await db.createCollection('Users')
    const userService = new UserService(userCollection);
    fastify.decorate('userService', userService);
}

fastify
    .register(require('fastify-formbody'))
    .register(require('fastify-mongodb', { url: dbUrl }))
    .register(fp(decorateFastify))
    .register(require('./routes'), { prefix: '/api/v1/user' })

module.exports = fastify;