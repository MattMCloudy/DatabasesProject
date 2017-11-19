const addNewCustomer = require('./addNewCustomer');
const addNewProduct = require('./addNewProduct');

const transactions = {
    addNewCustomer: addNewCustomer,
    addNewProduct: addNewProduct
}

module.exports = transactions;