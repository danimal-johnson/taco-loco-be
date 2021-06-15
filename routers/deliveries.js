const express = require('express');
const router = express.Router();
const Deliveries = require('./deliveries_model.js');

// ----- List all deliveries -----
router.get('/', (req, res) => {
  console.log('List all deliveries');
  Deliveries.find()
    .then(deliveries => {
      res.json(deliveries);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get deliveries.'})
    });
});

// ----- Display a specific delivery -----
router.get('/:id', (req, res) => {
  const { id } = req.params;
  console.log(`Get delivery #${id}`);
  Deliveries.findById(id)
    .then(delivery => {
      if (delivery)
        res.json(delivery);
      else
        res.status(400).json({ message: `Delivery ID ${id} not found.`});
    })
    .catch(err => {
      console.log(`Error getting delivery #${id}: ${err}`);
      res.status(500).json({ message: 'Failed to get delivery.'});
    });
});

// ----- Create a new delivery -----
router.post('/', (req, res) => {
  const deliveryData = req.body;
  console.log(deliveryData);
  Deliveries.add(deliveryData)
    .then(delivery => {
      res.status(201).json(delivery);
    })
    .catch (err => {
      console.log(err);
      res.status(500).json({ message: 'Failed to create new delivery.'});
    });
});

// ----- Modify fields -----
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { body } = req;

  console.log(`Updating ID ${id} with ${body}`);
  Deliveries.update(id, body)
    .then(delivery => {
      res.status(200).json(delivery);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// ----- Delete a delivery -----
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  console.log(`Delete delivery #${id}`);
  Deliveries.remove(id)
    .then(request => {
      if (request)
        res.status(200).json({ message: `ID ${id} successfully deleted.`});
      else
        res.status(400).json({ message: `ID ${id} not found.`})
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
