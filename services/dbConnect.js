const pgp = require('pg-promise')({});
const db = pgp('postgres://localhost/movies');

module.exports = db;