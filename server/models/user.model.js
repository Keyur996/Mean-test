const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, 'Please provide firstName'],
    },
    lastname: {
        type: String,
        required: [true, 'Please provide lastname'],
    },
    email: {
        type: String,
        required: [true, 'Please Enter Email'],
        unique: [true, 'this Email is Already in DB'],
        trim: true
    },
    birthdate: {
        type: Date,
        required: [true, 'Please Enter birthDate']
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: [true, "Please provide Role"]
    }
}, { timestamps: true });

userSchema.pre('save', async function (next){
    if(!this.isModified()) return next();
    let salt = await bcrypt.genSalt(10);
    let hashPassword = await bcrypt.hash(this.password, salt);
    this.password = hashPassword;
    next();
});

userSchema.set('toJSON', {
    transform: (doc, ret, options) => {
        delete ret.password;
        return ret;
    }
})


module.exports = mongoose.model('User', userSchema)