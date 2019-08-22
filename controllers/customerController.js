Customer = require('../models/customer');
Utils = require('../utilities');

exports.getAll = (req, res) => {
  Customer.getAll((error, customers) => {
    Utils.sendJsonResponse({
      res,
      error,
      successMessage: 'Customers retrieved successfully',
      data: customers,
    });
  });
};

exports.create = (req, res) => {
  var customer = new Customer.model();
  setCustomerAttributes(customer, req.body);

  customer.save(error => {
    Utils.sendJsonResponse({
      res,
      error,
      successMessage: 'New customer created',
      data: customer,
    });
  });
};

exports.get = (req, res) => {
  Customer.model.findOne(
    { customerNumber: req.params.customerNumber },
    (error, customer) => {
      Utils.sendJsonResponse({
        res,
        error,
        successMessage: 'Retrieved customer',
        data: customer,
      });
    }
  );
};

exports.update = (req, res) => {
  Customer.model.findOne(
    { customerNumber: req.params.customerNumber },
    (error, customer) => {
      if (error) Utils.sendJsonError({ res, error });
      setCustomerAttributes(customer, req.body);

      customer.save(error => {
        Utils.sendJsonResponse({
          res,
          error,
          successMessage: 'Customer Info updated',
          data: customer,
        });
      });
    }
  );
};

exports.delete = (req, res) => {
  Customer.model.remove(
    {
      customerNumber: req.params.customerNumber,
    },
    (error, customer) => {
      Utils.sendJsonResponse({
        res,
        error,
        successMessage: 'Customer deleted',
      });
    }
  );
};

let setCustomerAttributes = (customer, body) => {
  customer.customerNumber = body.customerNumber;
  customer.name = body.name;
  customer.email = body.email;
  customer.bankAccount = body.bankAccount;
  customer.address = body.address;
  customer.phoneNumber = body.phoneNumber;
};
