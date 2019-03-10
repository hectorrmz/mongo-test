const mongoose = require('mongoose');
const { Schema } = mongoose;

const scheduleSchema = new Schema({
  name: { type: String },
  maxWorkers: { type: Number }
});

module.exports = mongoose.model('Schedule', scheduleSchema);
