const db = require('../data/db-config');

module.exports = {
  add,
  find,
  findBy,
  findById,
  update,
  remove
}

function find() {
  return db('deliveries')
    .orderBy('id');
}

function findBy(filter) {
  return db('deliveries')
    .where(filter)
    .orderBy('id');

}

function findById(id) {
  return db('deliveries')
    .where({id})
    .first();
}

async function add(delivery) {
  const [id] = await db('deliveries')
    .returning('id') // <-- Line required by PostgreSQL only!
    .insert(delivery);
  return findById(id);
}

async function update(id, updatedDelivery) {
  return await db('deliveries')
    .where({id})
    .update(updatedDelivery)
    .then(() => {
      return findById(id);
    });
}

async function remove(id) {
  return await db('deliveries')
    .where({id})
    .del();
}