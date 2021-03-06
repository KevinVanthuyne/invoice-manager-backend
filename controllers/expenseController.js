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

exports.create = (req, res) => {
  var expense = new Expense.model();
  expense.id = req.body.id;
  expense.description = req.body.description;
  expense.unitPrice = req.body.unitPrice;
  expense.quantity = req.body.quantity;

  expense.save(error => {
    Utils.sendJsonResponse({
      res,
      error,
      successMessage: 'New expense created',
      data: expense,
    });
  });
};

exports.getNextId = (req, res) => {
  Expense.model
    .findOne({})
    .sort({ creationDate: 'desc' })
    .exec((error, expense) => {
      if (error) Utils.sendJsonError({ error, res });
      else if (expense == null)
        Utils.sendJsonSuccess({
          res,
          message: 'First expense id created',
          data: { nextId: 1 },
        });
      else {
        Utils.sendJsonSuccess({
          res,
          message: 'Next expense id found',
          data: { nextId: Number(expense.id) + 1 },
        });
      }
    });
};
