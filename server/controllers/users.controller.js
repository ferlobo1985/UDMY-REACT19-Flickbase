const { usersService, authService } = require('../services')
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
    },
    async updateProfile(req,res,next){
        try {
            const user = await usersService.updateUserProfile(req);
            res.json(res.locals.permission.filter(
                usersService.userObj(user)
            ))
        } catch (error) {
            next(error)
        }
    },
    async updateUserEmail(req,res,next){
        try {
            const user = await usersService.updateUserEmail(req);
            const token = await authService.genAuthToken(user);

            // send email

            res.cookie('x-access-token',token)
            .send({
                user:res.locals.permission.filter(usersService.userObj(user)),
                token
            })
        } catch (error) {
            next(error) 
        }
    }
}

module.exports = usersController;