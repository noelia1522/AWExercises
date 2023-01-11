const Pool = require('pg').Pool;

const pool = new Pool({
  user: "RanaSaniei",
  password: process.env.DB_PWD,
  host: "localhost",
  port: 5432,
  database: "todos_example"

})

module. exports = pool;
