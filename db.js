"use strict";

/** Database setup for jobly. */

const { Client } = require("pg");
const { getDatabaseUri } = require("./config");

console.log('***********getDatabaseUri***********');
console.log(getDatabaseUri());
console.log('***********getDatabaseUri***********');


const db = new Client({
  connectionString: getDatabaseUri(), 
  ssl: { rejectUnauthorized: false }
});

console.log('********before db.connect()');
db.connect();
console.log('********after db.connect()');


module.exports = db;
