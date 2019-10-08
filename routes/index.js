var router = require('express').Router();

router.use(require('./customerRoutes'));
router.use(require('./invoiceRoutes'));
router.use(require('./expenseRoutes'));

module.exports = router;
