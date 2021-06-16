const express = require('express');
const router = express.Router();
const Deliveries = require('./deliveries_model.js');

// ----- List all deliveries -----
router.get('/', (req, res) => {
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
  Deliveries.findById(id)
    .then(delivery => {
      if (delivery)
        res.json(delivery);
      else
        res.status(204).json({ message: `Delivery ID ${id} not found.`});
    })
    .catch(err => {
      console.error(`Error getting delivery #${id}: ${err}`);
      res.status(500).json({ message: 'Failed to get delivery.'});
    });
});

// ----- Create a new delivery -----
router.post('/', (req, res) => {
  const deliveryData = req.body;
  Deliveries.add(deliveryData)
    .then(delivery => {
      res.status(201).json(delivery);
    })
    .catch (err => {
      console.error(err);
      res.status(500).json({ message: 'Failed to create new delivery.'});
    });
});

// ----- Modify fields -----
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { body } = req;

  Deliveries.update(id, body)
    .then(delivery => {
      res.status(200).json(delivery);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json(err);
    });
});

// ----- Delete a delivery -----
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  Deliveries.remove(id)
    .then(request => {
      if (request)
        res.status(200).json({ message: `ID ${id} successfully deleted.`});
      else
        res.status(404).json({ message: `ID ${id} not found.`})
    })
    .catch(err => {
      console.error(err);
      res.status(500).json(err);
    });
});

module.exports = router;
