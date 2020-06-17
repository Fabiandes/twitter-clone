const bcrypt = require('bcrypt');

const keys = require('./keys')

module.export = class UserService{
    constructor(userCollection){
        this.userCollection = userCollection
    }

    async create(user){
        let result;
        try {
            const { username, fullName, email, password } = user

            const hash = await bcrypt.hash(password, keys.saltRounds)

            result = await this.userCollection.insertOne({ username, fullName, email, hash})

            return result
        } catch (error) {
            // TODO: Handle better
            throw error
        }
    }

    async retrieve(username){
        try {
            return this.userCollection.findOne({ username })
        } catch (error) {
            console.error("Error Getting User")
            console.log(error)
        }
    }
}