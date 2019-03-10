const mongoose = require('mongoose');
const { Schema } = mongoose;

const addressSchema = new Schema({
  address: { type: String },
  city: { type: String },
  zipcode: { type: String },
  region: { type: String }
});

module.exports = mongoose.model('Address', addressSchema);
