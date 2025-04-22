const express = require('express');
const router = express.Router();
const articlesController = require('../controllers/articles.controller');

// AUTH
const auth = require('../middleware/auth');


router.post('/',auth('createAny','articles'),articlesController.createArticle)


// CATEGORIES
router.route('/categories')
.post(auth('createAny','categories'), articlesController.createCategory)
.get(auth('readAny','categories'), articlesController.getAllCategories)




module.exports = router;