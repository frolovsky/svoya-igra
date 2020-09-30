const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
    }, 
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true,
    },
    cookie: {
        type: String,
    }
})


UserSchema.pre('save', function(next) {
	const user = this

	bcrypt.hash(user.password, 10, (error, hash) => {
		user.password = hash
		next()
	})
})

const User = mongoose.model('User', UserSchema)

module.exports = User