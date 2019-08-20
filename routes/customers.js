let router = require('express').Router();

router.get('/customers', (req, res) => {
  res.json([{ name: 'Dennis' }, { name: 'Kevin' }]);
});

module.exports = router;
