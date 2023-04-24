const express = require('express'); 
const Router = express.Router(); 
const ExchangeController = require('../controllers/ExchangeController')


const initApiRoutes = (app) => { 
    Router.get('/syncData', ExchangeController.syncData);
    Router.get('/getData',ExchangeController.getData);
    app.use('/api/', Router);
}

module.exports = initApiRoutes;