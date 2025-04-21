const { User } = require('../models/user');
const { status } = require('http-status');
const { ApiError } = require('../middleware/apiError')

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

const updateUserProfile = async(req)=>{
    try {
        const user = await User.findOneAndUpdate(
            {_id:req.user._id},
            {
                "$set":{
                    firstname:req.body.firstname,
                    lastname:req.body.lastname,
                    age:req.body.age
                }
            },
            {new:true}
        );
        if(!user){
            throw new ApiError(status.NOT_FOUND,'User not found')
        }
        return user;
    } catch (error) {
        throw error
    }
}

const updateUserEmail = async(req)=>{
    try {
        if(await User.emailTaken(req.body.newemail)){
            throw new ApiError(status.NOT_FOUND,'Sorry email taken')
        }
        const user = await User.findOneAndUpdate(
            {_id:req.user._id, email:req.user.email},
            {
                "$set":{
                    email:req.body.newemail,
                    verified: false
                }
            },
            { new: true }
        );
        if(!user){
            throw new ApiError(status.NOT_FOUND,'User not found')
        }
        return user;
    } catch (error) {
        throw error
    }
}

module.exports = {
    findUserByEmail,
    findUserById,
    userObj,
    updateUserProfile,
    updateUserEmail
}