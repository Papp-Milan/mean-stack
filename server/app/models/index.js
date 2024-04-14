const config = require("../config/db.config.js");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = config.url;
db.tutorials = require("./tutorial.model.js")(mongoose);

module.exports = db;