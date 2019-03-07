const mongoose = require("mongoose");
const { Schema } = mongoose;

const supervisorModel = new Schema({
    name: {type: String},
    phone: {type: String}
});

module.exports = mongoose.model('Supervisor', supervisorModel);