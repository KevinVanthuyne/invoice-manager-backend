let router = require('express').Router();
let expenseController = require('../controllers/expenseController');

router.route('/expenses').get(expenseController.getAll);
router.route('/expenses/:id').get(expenseController.get);

module.exports = router;
