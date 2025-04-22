const { articlesService }  = require('../services');
const { status } = require('http-status');

const articlesController = {
    async createArticle(req,res,next){
        try {
            /// req.body > add article
            // send response
        } catch (error) {
            next(error)
        }
    },
    async createCategory(req,res,next){
        try {
            const category = await articlesService.addCategory(req.body);
            res.json(category);
        } catch (error) {
            next(error)
        }
    },
    async getAllCategories(req,res,next){
        try {
            const categories =  await articlesService.findAllCategories()
            res.json(categories)
        } catch (error) {
            next(error)
        }
    }
}




module.exports = articlesController;