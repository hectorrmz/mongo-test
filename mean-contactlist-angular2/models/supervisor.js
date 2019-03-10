const mongoose = require('mongoose');
const { Schema } = mongoose;

const supervisorModel = new Schema({
  name: { type: String },
  phone: { type: String },
  services: [{ type: Schema.Types.ObjectId, ref: 'Service' }]
});

module.exports = mongoose.model('Supervisor', supervisorModel);
