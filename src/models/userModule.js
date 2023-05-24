const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'User name is required'],
        trim: true,
        minlength: [3, 'User name can be minimum 3 characters'],
        maxlength: [31, 'User name can be maximum 31 characters']
    },
    emai: {
        type: String,
        required: [true, 'User email is required'],
        trim: true,
        unique: true,
        lowercase: true,


        validator: function (v) {
            return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(v);

        },
        message: 'Please enter a valid emali'
    },
    password: {
        type: String,
        required: [true, 'User password is required'],
        minlength: [6, 'Password can be minimum 3 characters'],
        maxlength: [10, 'Password can be maximum 31 characters'],
        set: (v) => bcrypt.hashSync(v, bcrypt.genSaltSync(10)),

    },
    image: {
        type: String,
    },
    address: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    isBanned: {
        type: Boolean,
        default: false,
    }

}, { timestamps: true }
);

const User = model('Users', userSchema);

module.exports = User;