Expense = require('../models/expense');
Utils = require('../utilities');

exports.getAll = (req, res) => {
  Expense.getAll((error, expenses) => {
    Utils.sendJsonResponse({
      res,
      error,
      successMessage: 'Expenses retrieved successfully',
      data: expenses,
    });
  });
};

exports.get = (req, res) => {
  Expense.model.findOne({ id: req.params.id }, (error, expense) => {
    console.log(expense);
    Utils.sendJsonResponse({
      res,
      error,
      successMessage: 'Retrieved expense',
      data: expense,
    });
  });
};
