const addNewCustomer = require('./addNewCustomer');
const addNewProduct = require('./addNewProduct');
const addNewOrder = require('./addNewOrder');
const addProductsToOrder = require('./addProductsToOrder');
const makePayment = require('./makePayment');

const transactions = {
    addNewCustomer: addNewCustomer,
    addNewProduct: addNewProduct,
    addNewOrder: addNewOrder,
    addProductsToOrder: addProductsToOrder,
    makePayment: makePayment
}

module.exports = transactions;