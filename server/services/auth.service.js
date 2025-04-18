const { User } = require('../models/user');
const usersService = require('./users.service');
const { ApiError } = require('../middleware/apiError');
const { status } =  require('http-status');

const createUser = async(email,password)=>{
    try {
        if(await User.emailTaken(email)){
            // throw new Error('Sorry email Taken')
            throw new ApiError(status.BAD_REQUEST,'Sorry email Taken')
        }
        const user = new User({
            email,
            password
        });
        await user.save();
        return user;
    } catch (error) {
        throw error;
    }
}

const genAuthToken = (user) => {
    const token = user.generateAuthToken();
    return token;
}

const signInWithEmailAndPassword = async(email,password)=>{
    try {
        const user = await usersService.findUserByEmail(email)
        if(!user){
            throw new Error('Sorry Bad email')
        }
        /// validate password
        if(!(await user.comparePassword(password))){
            throw new Error('Sorry bad password')
        }
        return user;
    } catch (error) {
        throw error
    }
}

module.exports = {
    createUser,
    genAuthToken,
    signInWithEmailAndPassword
}