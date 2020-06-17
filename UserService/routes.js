const fastify = require("./app")

const {
    registration: registrationSchema,
    retrieval: retrievalSchema
} = require('./schemas')

module.exports = (fastify, options, next)=>{

    fastify.post('/create', registrationSchema, registrationHandler)

    fastify.get('/:username', retrievalSchema, retrievalHandler)

    next()
}

async function registrationHandler(request, reply){
    const { username } = request.params;
    const user = await this.userService.retrieve(username);
    return user
}

async function retrievalHandler(request, reply){
    const result = await this.userService.create(request.body)
    return result
}