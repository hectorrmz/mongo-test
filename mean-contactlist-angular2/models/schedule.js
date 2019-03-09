const mongoose = require('mongoose');
const { Schema } = mongoose;

const scheduleSchema = new Schema({
  type: { type: String },
  maxWorkers: { type: Number }
});

module.exports = mongoose.model('Schedule', scheduleSchema);
