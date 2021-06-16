
const server = require('../server');
const delivery = require('supertest');
const db = require('../data/db-config');

// TODO beforeEach(() => db.seed.run()); // Seed the database first to run tests.
describe('deliveriesRouter', () => {
  it('runs the tests', () => {
    expect(true).toBe(true);
  });

  describe('test environment', () => {
    it('should use the testing environment', () => {
      // TODO expect(process.env.DB_ENV).toBe('testing');
      expect(true).toBe(true);
    });
  });

  describe('GET /', () => {
    it('should return status 200 OK', async () => {
      const res = await delivery(server).get('/deliveries');
      expect(res.status).toBe(200);
      expect(res.type).toMatch(/json/i);
    });
  });

  describe('GET /:id', () => {
    it('valid id should return status code 200 OK', async () => {
      const res = await delivery(server).get('/deliveries/23');
      expect(res.status).toBe(200);
      expect(res.type).toMatch(/json/i);
    });
    it('invalid id should return status code 204 No Content, no body', async () => {
      const res = await delivery(server).get('/deliveries/5');
      expect(res.status).toBe(204);
    });
  });

  // TODO:
  /*********
   * POST:
   * - all required fields returns status 201 Created and object with ID
   * - missing fields: behavior?
   * - extra fields: ignore or reject?
   * PUT:
   * - no fields changed: behavior?
   * - 1 field changed: 200 OK
   * - both fields changed: 200 OK
   * - extra fields included: ignore or reject?
   * DELETE:
   * - Deleting a valid ID: OK. No Body.
   * - Use a GET request to confirm it no longer exists: 204 no content.
   * - Deleting ID again: 404 Not found
   * GET:
   * - If no records are returned: 200 OK. Body is an empty JSON array.
   *********/

});