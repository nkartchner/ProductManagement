const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './public/dist/public')));


const routes = require('./server/config/routes');
routes(app);

app.all("*", (request, response, next) => {
    response.sendFile(path.resolve("./public/dist/public/index.html"));
});

app.listen(8000, function () {
    console.log("listening on port 8000");
});

