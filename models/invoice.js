var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var customerModel = require('./customer');

var invoiceSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  customer: customerModel.schema,
  expenses: Array,
  tax: Number,
  date: Date,
  expirationDate: Date,
  creationDate: {
    type: Date,
    default: Date.now,
  },
});

invoiceSchema.plugin(uniqueValidator);
module.exports.model = mongoose.model('invoice', invoiceSchema);
