const bcrypt = require('bcrypt');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please, provide a username']
    },
    email: {
        type: String,
        required: [true, 'Please, provide a email'],
        unique: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please, provide a valid email'
        ]
    },
    password: {
        type: String,
        required: [true, 'Please, provide a password'],
        minlength: 6,
        select: false
    },
    resetPasswordToken: String,
    resetPasswordExpiry: Date
});

UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
})
UserSchema.methods.matchPasswords = async function (password) {
    return await bcrypt.compare(password, this.password);
}
UserSchema.methods.getSignedToken = function () {
    return jwt.sign({ _id: this._id },
        process.env.JWT_SECRET_KEY,
        { expiresIn: process.env.JWT_EXPIRE })
}
UserSchema.methods.getResetPasswordToken = function () {
    const resetToken = crypto.randomBytes(20).toString('hex');
    this.resetPasswordToken =
        crypto
            .createHash('sha256')
            .update(resetToken)
            .digest('hex');
    this.resetPasswordExpiry = Date.now() + 10 * (60 * 1000)
    return resetToken;
}
const User = mongoose.model('User', UserSchema);
module.exports = User;