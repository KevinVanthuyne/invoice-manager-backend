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
  setCustomerAttributes(customer, req.body);

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
    setCustomerAttributes(customer, req.body);

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

let setCustomerAttributes = (customer, body) => {
  customer.customerNumber = body.customerNumber;
  customer.name = body.name;
  customer.email = body.email;
  customer.bankAccount = body.bankAccount;
  customer.address = body.address;
  customer.phoneNumber = body.phoneNumber;
};
