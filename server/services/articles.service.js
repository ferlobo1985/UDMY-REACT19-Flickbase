const { Category } = require('../models/category');
const { status } = require('http-status');
const { ApiError } = require('../middleware/apiError')


const addCategory = async(body)=>{
    try {
        //// VALIDATION
        const category = new Category({
            ...body
        })
        await category.save();
        return category;
    } catch (error) {
        throw error
    }
}

const findAllCategories = async() => {
    try {
        const categories = await Category.find();
        return categories;
    } catch (error) {
        throw error
    }
}

module.exports = {
    addCategory,
    findAllCategories
}