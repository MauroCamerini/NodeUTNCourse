const mongoose = require('../config/mongodb')
const errorMessage = require('../utils/errorMessage')
const validators = require('../utils/validators')

const bcrypt = require('bcrypt')


const usersSchema = mongoose.Schema({
    "name": {
        type: String,
        required: [true, errorMessage.GENERAL.required],
        maxLength: [15, "Maximum length is 15"]
    },
    "email": {
        type: String,
        required: [true, errorMessage.GENERAL.required],
        validate: {
            validator: validators.email,
            message: errorMessage.USERS.invalidEmail
        },
        unique: true
    },
    "password": {
        type: String,
        validate: {
            validator: validators.password,
            message: errorMessage.USERS.invalidPassword
        },
        required: [true, errorMessage.GENERAL.required],
    },
})

usersSchema.pre("save", function(next){
    this.password = bcrypt.hashSync(this.password, 10)
    next()
})

module.exports = mongoose.model('users', usersSchema )

