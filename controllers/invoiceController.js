Moment = require('moment');

Invoice = require('../models/invoice');
Utils = require('../utilities');

exports.getNextId = (req, res) => {
  Invoice.model
    .findOne({})
    .sort({ creationDate: 'desc' })
    .exec((error, invoice) => {
      if (error) Utils.sendJsonError({ error, res });
      else {
        const lastInvoiceId = invoice.id;
        let nextId;

        const currentYearPattern = new RegExp(`^${Moment().format('YYYY')}`);
        if (currentYearPattern.test(lastInvoiceId)) {
          const invoiceNumberString = lastInvoiceId
            .toString()
            .split(Moment().format('YYYY'))[1];

          if (invoiceNumberString === '999') {
            Utils.sendJsonError({
              res,
              error: 'Maximum amount of invoices has been reached this year.',
            });
          } else {
            nextId = lastInvoiceId + 1;
            Utils.sendJsonSuccess({
              res,
              message: 'Next invoice id found',
              data: { nextId },
            });
          }
        } else {
          nextId = Number(`${Moment().format('YYYY')}001`);
          Utils.sendJsonSuccess({
            res,
            message: 'Next invoice id found. Started numbering for a new year.',
            data: { nextId },
          });
        }
      }
    });
};

exports.create = (req, res) => {
  var invoice = new Invoice.model();
  invoice.id = req.body.id;
  invoice.customer = req.body.customer;
  invoice.expenses = req.body.expenses;
  invoice.tax = req.body.tax;
  invoice.date = req.body.date;
  invoice.expirationDate = req.body.expirationDate;

  invoice.save(error => {
    Utils.sendJsonResponse({
      res,
      error,
      successMessage: 'New invoice created',
      data: invoice,
    });
  });
};
