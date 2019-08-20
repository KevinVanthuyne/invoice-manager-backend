Customer = require('../models/customer');
JsonUtils = require('../jsonUtilities');

exports.list = (req, res) => {
  Customer.get((err, customers) => {
    if (err) JsonUtils.error(res, err);
    else {
      JsonUtils.success({
        res,
        message: 'Customer retrieved successfully',
        data: customers,
      });
    }
  });
};

exports.create = (req, res) => {
  var customer = new Customer();
  customer.name = req.body.name;
  customer.email = req.body.email;
  customer.bankAccount = req.body.bankAccount;
  customer.address = req.body.address;
  customer.phoneNumber = req.body.phoneNumber;

  customer.save(err => {
    if (err) JsonUtils.error(res, err);
    else {
      JsonUtils.success({
        res,
        message: 'New customer created',
        data: customer,
      });
    }
  });
};

exports.get = (req, res) => {
  Customer.findById(req.params.customerId, (err, customer) => {
    if (err) JsonUtils.error(res, err);
    else {
      JsonUtils.success({
        res,
        message: 'Retrieved customer',
        data: customer,
      });
    }
  });
};

exports.update = (req, res) => {
  Customer.findById(req.params.customerId, (err, customer) => {
    if (err) JsonUtils.error(res, err);
    customer.name = req.body.name;
    customer.email = req.body.email;
    customer.bankAccount = req.body.bankAccount;
    customer.address = req.body.address;
    customer.phoneNumber = req.body.phoneNumber;

    customer.save(err => {
      if (err) JsonUtils.error(res, err);
      else {
        JsonUtils.success({
          res,
          message: 'Customer Info updated',
          data: customer,
        });
      }
    });
  });
};

exports.delete = (req, res) => {
  Customer.remove(
    {
      _id: req.params.customerId,
    },
    (err, customer) => {
      if (err) JsonUtils.error(res, err);
      else {
        JsonUtils.success({
          res,
          message: 'Customer deleted',
        });
      }
    }
  );
};
