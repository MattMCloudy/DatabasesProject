const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const clientMaker = require('./operations/client');
const transactions = require('./transactions/transactions');

var app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'matthew123',
    database: 'data_proj'
});

connection.connect();
const client = clientMaker(connection);

app.get('/addCustomer', (req, res) => {
    res.sendFile(path.join(__dirname + '/ui/addCustomer.html'));
});

app.post('/addCustomer', (req, res) => {
    transactions.addNewCustomer(req.body, client, (customer) => {
        client.insert.customer(customer);
    });
});

app.get('/addProduct', (req, res) => {
    res.sendFile(path.join(__dirname + '/ui/addProduct.html'));
});

app.post('/addProduct', (req, res) => {
    transactions.addNewProduct(req.body, client, (product) => {
        client.insert.product(product);
    });
});

app.listen(8080);