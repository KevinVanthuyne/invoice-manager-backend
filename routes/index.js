var router = require('express').Router();

router.use(require('./customerRoutes'));
router.use(require('./invoiceRoutes'));

module.exports = router;
