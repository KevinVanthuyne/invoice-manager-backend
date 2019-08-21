let router = require('express').Router();
let invoiceController = require('../controllers/invoiceController');

router.route('/invoices').post(invoiceController.create);
router.route('/invoices/nextId').get(invoiceController.getNextId);

module.exports = router;
