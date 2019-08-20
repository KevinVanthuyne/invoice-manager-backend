var mongoose = require('mongoose');

var customerSchema = mongoose.Schema({
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

var Customer = (module.exports = mongoose.model('customer', customerSchema));
module.exports.get = (callback, limit) => {
  Customer.find(callback).limit(limit);
};
