require('dotenv').config();

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOSTNAME,
      port: process.env.PG_PORT,
      user: processs.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DATABASE_NAME
    },
    // generates migration firles in the data/migrations/ directory
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
    pool: {
      min: 2,
      max: 10
    }
  },

  // TODO: Add testing configuration details
  testing: {
    client: 'postgresql',
    connection: process.env.DB_URL,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  },

  // TODO: Add production configuration details
  production: {
    client: 'postgresql',
    connection: process.env.DB_URL,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  }

};
