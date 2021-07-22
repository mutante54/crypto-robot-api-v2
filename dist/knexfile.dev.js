"use strict";

module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    }
  },
  staging: {
    client: 'mysql2',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    }
  },
  production: {
    client: 'mysql2',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    }
  }
};