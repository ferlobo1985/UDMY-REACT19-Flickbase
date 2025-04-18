const { authService }  = require('../services');
const { status } = require('http-status');

const authController = {
    async register(req,res){
        try {
            const { email,password } = req.body;
            const user = await authService.createUser(email,password);
            // create user
            // gen token


            /// send a response
        
        } catch (error) {
            
        }
    },
}

module.exports = authController;