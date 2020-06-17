const registration = {
    body:{
        type: 'object',
        required: ['username', 'fullName', 'email', 'password'],
        properties: {
            username:{
                type: 'string',
                maxLength: 16,
                minLength: 3
            },
            fullName: {},
            email: {
                type: 'string',
                maxLength: 100,
                minLength: 3,
                format: 'email'
            },
            password: {
                type: 'string',
                minLength: 5,
                maxLength: 1000
            }
        },
        additionalProperties: false    
    },
    response: {
        200: {
            type: 'object',
            required: ['username'],
            properties: {
                username: {
                    type: 'string',
                    minLength: 3,
                    maxLength: 16
                }
            }
        }
    }
}

const retrieval = {
    params: {
        type: 'object',
        required: ['username'],
        properties: {
            username: {
                type: 'string',
                maxLength: 16,
                minLength: 3
            }
        },
        additionalProperties: false
    },
    response: {
        200: {
            type: 'object',
            required: ['username', 'fullName', 'email'],
            properties: {
                username:{
                    type: 'string',
                    maxLength: 16,
                    minLength: 3
                },
                fullName: {},
                email: {
                    type: 'string',
                    maxLength: 100,
                    minLength: 3,
                    format: 'email'
                }
            },
            additionalProperties: false
        }
    }
}

module.exports = { registration, retrieval }