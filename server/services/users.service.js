const { User } = require('../models/user');
const { status } = require('http-status');

const findUserByEmail = async(email)=>{
    return await User.findOne({email});
}

const findUserById = async(_id) => {
    return await User.findById(_id)
}

const userObj = (user) => {
    return {
        ...user._doc,
        _id: user._doc._id.toHexString()
    }
}

module.exports = {
    findUserByEmail,
    findUserById,
    userObj
}