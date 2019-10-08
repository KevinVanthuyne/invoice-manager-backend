var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

// separate schema without unique customerNumber for embedding in other schema's
var sharedCustomerSchemaStructure = {
  customerNumber: {
    type: String,
    required: true,
  },
  type: String,
  businessName: String,
  vatNumber: String,
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
};
module.exports.schema = sharedCustomerSchemaStructure;

var customerSchemaStructure = {
  customerNumber: {
    unique: true,
  },
  ...sharedCustomerSchemaStructure,
};
var customerSchema = mongoose.Schema(customerSchemaStructure);
customerSchema.plugin(uniqueValidator);
var Customer = (module.exports.model = mongoose.model(
  'customer',
  customerSchema
));

module.exports.getAll = (callback, limit) => {
  Customer.find(callback).limit(limit);
};
