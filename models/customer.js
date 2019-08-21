var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var customerSchema = mongoose.Schema({
  customerNumber: {
    type: String,
    required: true,
    unique: true,
  },
  name: String,
  email: String,
  bankAccount: String,
  address: {
    street: String,
    houseNumber: Number,
    zipCode: String,
    city: String,
  },
  phoneNumber: String,
  creationDate: {
    type: Date,
    default: Date.now,
  },
});
customerSchema.plugin(uniqueValidator);

var Customer = (module.exports = mongoose.model('customer', customerSchema));
module.exports.get = (callback, limit) => {
  Customer.find(callback).limit(limit);
};
