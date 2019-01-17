const controller = require('../controllers/controllers');
const mongoose = require('mongoose');
const db_model = require('../models/models');

module.exports = function (app) {

    app.get('/api/all', controller.getAll);
    app.post('/api/new', controller.create);
    app.put('/api/update/:id', controller.update);
    app.get('/api/:id', controller.getOne);
    app.delete('/api/delete/:id', controller.delete);

};