var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var expenseSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  description: String,
  unitPrice: Number,
  quantity: Number,
});

expenseSchema.plugin(uniqueValidator);
var Expense = (module.exports.model = mongoose.model('expense', expenseSchema));

module.exports.getAll = (callback, limit) => {
  Expense.find(callback).limit(limit);
};
