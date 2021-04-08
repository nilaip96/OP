const { Pool } = require('pg');

const pool = new Pool({
  user: '',
  host: 'localhost',
  database: 'op',
  password: '',
  port: 5432,
});

// const pool = new Pool({
//   user: 'nilai',
//   host: 'localhost',
//   database: 'op',
//   password: '123',
//   port: 5432,
// });

module.exports = pool;
