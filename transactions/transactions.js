const addNewCustomer = require('./addNewCustomer');
const addNewProduct = require('./addNewProduct');
const addNewOrder = require('./addNewOrder');
const addProductsToOrder = require('./addProductsToOrder');
const makePayment = require('./makePayment');
const returnProduct = require('./returnProduct');
const deleteCustomer = require('./deleteCustomer');

const transactions = {
    addNewCustomer: addNewCustomer,
    addNewProduct: addNewProduct,
    addNewOrder: addNewOrder,
    addProductsToOrder: addProductsToOrder,
    makePayment: makePayment,
    returnProduct: returnProduct,
    deleteCustomer: deleteCustomer
}

module.exports = transactions;