const express = require('express');
const router = express.Router();

const dummyData = [
  { id: 0,
    name: 'Joe',
    address: '1600 Pennsylvania Avenue'
  },
  { id: 1,
    name: 'Oscar',
    address: '123 Sesame Street'
  },
  { id: 2,
    name: 'Jeff',
    address: 'Orbit'
  },
  { id: 3,
    name: 'Elon',
    address: 'Tesla, any road USA'
  },
  { id: 4,
    name: 'Tim',
    address: 'Prototype Way'
  }
]

// ----- List all deliveries -----
router.get('/', (req, res) => {
  console.log('List all deliveries');
  res.send(dummyData).json();
});

// ----- Display a specific delivery -----
router.get('/:id', (req, res) => {
  const { id } = req.params;
  console.log(`Get delivery #${id}`);
  res.send(dummyData[id]).json();
});

// ----- Create a new delivery -----
router.post('/', (req, res) => {
  const requestData = req.body;
  console.log(requestData);
  res.status(201).send({ id: 7, ...requestData }).json();
});

// ----- Modify fields -----
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const requestData = req.body;
  console.log(requestData);
  res.status(200).send({ id: id, ...requestData });
});

// ----- Delete a delivery -----
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  console.log(`Delete delivery #${id}`);
  res.send();
});

module.exports = router;
