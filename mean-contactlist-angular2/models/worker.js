const mongoose = require('mongoose');
const AddressSchema = require('./address');

const { Schema } = mongoose;

const workerSchema = new Schema({
  supervisor: { type: Schema.Types.ObjectId, ref: 'Supervisor' },
  service: { type: Schema.Types.ObjectId, ref: 'Service' },
  firstName: { type: String },
  lastName: { type: String },
  phone: { type: String },
  dob: { type: Date },
  admissionDate: { type: Date },
  status: { type: String },
  address: AddressSchema,
  ssn: { type: String },
  accountNumber: { type: String },
  infonavit: { type: String }
});

module.exports = mongoose.model('Worker', workerSchema);
