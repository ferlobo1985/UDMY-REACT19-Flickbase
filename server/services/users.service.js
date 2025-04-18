const { User } = require('../models/user');
const { status } = require('http-status');

const findUserByEmail = async(email)=>{
    return await User.findOne({email});
}

module.exports = {
    findUserByEmail
}