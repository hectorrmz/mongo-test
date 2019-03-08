const mongoose = require('mongoose');

const { Schema } = mongoose;

const serviceSchema = new Schema({
  supervisor: { type: Schema.Types.ObjectId, ref: 'Supervisor' },
  name: { type: String },
  schedule: [{ type: String }],
  payment: [{ type: String }],
});

module.exports = mongoose.model('Service', serviceSchema);
