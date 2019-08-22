let router = require('express').Router();
let customerController = require('../controllers/customerController');

router
  .route('/customers')
  .get(customerController.getAll)
  .post(customerController.create);

router
  .route('/customers/:customerNumber')
  .get(customerController.get)
  .put(customerController.update)
  .delete(customerController.delete);

module.exports = router;
