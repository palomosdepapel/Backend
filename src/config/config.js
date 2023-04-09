const { Schema, model } = require('mongoose')

const collection = 'usuarios'

const UserSchema = new Schema({
    first_name: String,
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true
    }
})

const userModel = model(collection, UserSchema)

module.exports = {
    userModel
}