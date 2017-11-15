const mysql = require('mysql');
const clientMaker = require('./operations/client');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'matthew123',
    database: 'data_proj'
});

connection.connect();

var client = clientMaker(connection);

connection.end();