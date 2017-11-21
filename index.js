const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const clientMaker = require('./operations/client');
const transactions = require('./transactions/transactions');
const createTable = require('./utilities/createTable');

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
    transactions.addNewCustomer(req.body, client);
});

app.get('/addProduct', (req, res) => {
    res.sendFile(path.join(__dirname + '/ui/addProduct.html'));
});

app.post('/addProduct', (req, res) => {
    transactions.addNewProduct(req.body, client);
});

app.get('/addOrder', (req, res) => {
    res.sendFile(path.join(__dirname + '/ui/addOrder.html'));
});

app.post('/addOrder', (req, res) => {
    transactions.addNewOrder(req.body, client);
});

app.get('/showProducts', (req, res) => {
    connection.query('SELECT * FROM Products WHERE OrderId IS NULL;', (err, results, fields) => {
        console.log(results);
        res.send('<html>' + createTable(results) + '</html>');
    });
});

app.get('/addProductToOrder', (req, res) => {
    res.sendFile(path.join(__dirname + '/ui/addProductToOrder.html'));
});

app.post('/addProductToOrder', (req, res) => {
    transactions.addProductsToOrder(req.body, client);
});

app.get('/makePayment', (req, res) => {
    res.sendFile(path.join(__dirname + '/ui/makePayment.html'));
});

app.post('/makePayment', (req, res) => {
    transactions.makePayment(req.body, client);
});

app.get('/returnProduct', (req, res) => {
    res.sendFile(path.join(__dirname + '/ui/returnProduct.html'));
});

app.post('/returnProduct', (req, res) => {
    transactions.returnProduct(req.body, client);
});

app.get('/deleteCustomer', (req, res) => {
    res.sendFile(path.join(__dirname + '/ui/deleteCustomer.html'));
});

app.post('/deleteCustomer', (req, res) => {
    transactions.deleteCustomer(req.body, client);
});

app.listen(8080);