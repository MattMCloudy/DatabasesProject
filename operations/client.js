var deleteMaker = require('./delete');
var insertCustomerMaker = require('./insertCustomer');
var insertCustomerPaymentMaker = require('./insertCustomerPayment');
var insertOrderMaker = require('./insertOrder');
var insertProductMaker = require('./insertProduct');
var selectMaker = require('./select');
var updateMaker = require('./update');

function clientMaker(connection) {
    var client = {
        select: selectMaker(connection),
        update: updateMaker(connection),
        delete: deleteMaker(connection),
        insert: {
            customer: insertCustomerMaker(connection),
            customer_payment: insertCustomerPaymentMaker(connection),
            order: insertOrderMaker(connection),
            product: insertProductMaker(connection)
        }
    }

    return client;
}

module.exports = clientMaker;