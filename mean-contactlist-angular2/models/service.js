const mongoose = require('mongoose');
const ScheduleSchema = require('./schedule').schema;
const PositionSchema = require('./position').schema;

const { Schema } = mongoose;

const serviceSchema = new Schema({
  supervisor: { type: Schema.Types.ObjectId, ref: 'Supervisor' },
  schedules: [ScheduleSchema],
  positions: [PositionSchema],
  name: { type: String },
  maxWorkers: { type: Number }
});

module.exports = mongoose.model('Service', serviceSchema);
