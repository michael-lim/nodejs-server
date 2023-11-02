const mysql = require("mysql");

const db = mysql.createConnection( {
  host: "ec2-3-71-21-165.eu-central-1.compute.amazonaws.com",
  user: "justrhuh",
  password: "qkekfh_18Q",
  database: "eurogamez",
} );

db.connect();

module.exports = db;