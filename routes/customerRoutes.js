let router = require('express').Router();
let customerController = require('../controllers/customerController');

router
  .route('/customers')
  .get(customerController.list)
  .post(customerController.create);

router
  .route('/customers/:customerId')
  .get(customerController.get)
  .put(customerController.update)
  .delete(customerController.delete);

module.exports = router;
