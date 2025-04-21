const { usersService } = require('../services')
const { status } =  require('http-status');
const { ApiError } = require('../middleware/apiError')

const usersController = {
    async profile(req,res,next){
        try {
            const user = await usersService.findUserById(req.user._id);
            if(!user){
                throw new ApiError(status.NOT_FOUND,'User not found')
            }
            //res.json(user)
            res.json(res.locals.permission.filter(
                usersService.userObj(user)
            ))
        } catch (error) {
            next(error)
        }
    }
}

module.exports = usersController;