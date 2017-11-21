const addNewCustomer = require('./addNewCustomer');
const addNewProduct = require('./addNewProduct');
const addNewOrder = require('./addNewOrder');

const transactions = {
    addNewCustomer: addNewCustomer,
    addNewProduct: addNewProduct,
    addNewOrder: addNewOrder
}

module.exports = transactions;