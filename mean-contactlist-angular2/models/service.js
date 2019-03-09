const mongoose = require('mongoose');

const { Schema } = mongoose;

const serviceSchema = new Schema({
  supervisor: { type: Schema.Types.ObjectId, ref: 'Supervisor' },
  schedule: [{ type: Schema.Types.ObjectId, ref: 'Schedule' }],
  position: [{ type: Schema.Types.ObjectId, ref: 'Position' }],
  name: { type: String },
  maxWorkers: { type: Number }
});

module.exports = mongoose.model('Service', serviceSchema);
