const mongoose = require('mongoose');
const ScheduleSchema = require('./schedule').schema;

const { Schema } = mongoose;

const serviceSchema = new Schema({
  supervisor: { type: Schema.Types.ObjectId, ref: 'Supervisor' },
  schedule: [ScheduleSchema],
  position: [{ type: Schema.Types.ObjectId, ref: 'Position' }],
  name: { type: String },
  maxWorkers: { type: Number }
});

module.exports = mongoose.model('Service', serviceSchema);
