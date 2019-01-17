const mongoose = require('mongoose');
const db_model = require('../models/models');

module.exports = {

    getAll: (request, response) => db_model.find({})
        .then(data => console.log("got all the data") || response.json({ message: "Success", data: data }))
        .catch(err => console.log("Something went wrong", err) || response.json({ message: "Error", error: err })),


    getOne: (request, response) => db_model.find({ _id: request.params.id })
        .then(data => console.log("GOTEM") || response.json({ message: "Success", data: data }))
        .catch(err => console.log("Something Went wrong!", err) || response.json({ message: "Error", error: err })),


    create: (request, response) => {
        console.log("In the controller!!!! //////////////////////////////////////////////////////////////");
        db_model.create(request.body)
            .then(data => console.log(data) || response.json({ message: "Success", data: data }))
            .catch(err => console.log("Something went wrong!", err) || response.json({ message: "Error", error: err }));
    },

    update: (request, response) => db_model.findByIdAndUpdate({ _id: request.params.id }, request.body)
        .then(data => console.log(data) || response.json({ message: "Success", data: data }))
        .catch(err => console.log("Something went wrong", request.body) || response.json({ message: "Error", error: err })),

    delete: (request, response) => db_model.findByIdAndDelete({ _id: request.params.id })
        .then(data => console.log("Deleted", data) || response.json({ message: "Deleted" }))
        .catch(err => console.log("Something Went Wrong!", err) || response.json({ message: "Error", error: err }))

};