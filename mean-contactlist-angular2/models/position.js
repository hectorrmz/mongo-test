const mongoose = require('mongoose');
const { Schema } = mongoose;

const positionSchema = new Schema({
  name: { type: String },
  salary: { type: Number }
});

module.exports = mongoose.model('Position', positionSchema);
