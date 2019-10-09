let router = require('express').Router();
let expenseController = require('../controllers/expenseController');

router
  .route('/expenses')
  .get(expenseController.getAll)
  .post(expenseController.create);
router.route('/expenses/:id').get(expenseController.get);

module.exports = router;
