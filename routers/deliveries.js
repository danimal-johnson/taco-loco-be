const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('List all deliveries');
  res.send('List all deliveries');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  console.log(`Get delivery #${id}`);
  res.send(`Get delivery #${id}`);
});

module.exports = router;