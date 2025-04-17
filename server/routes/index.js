const express = require('express');
const router = express.Router();

// ROUTES
const authRoute = require('./auth.route')
const usersRoute = require('./users.route')
const articlesRoute = require('./articles.route')

const routesIndex = [
    {
        path:'/auth',
        route:authRoute
    },
    {
        path:'/users',
        route:usersRoute
    },
    {
        path:'/articles',
        route:articlesRoute
    }
]

/// router.use(path,file)
routesIndex.forEach((route)=>{
    router.use(route.path,route.route)
});
module.exports = router;

