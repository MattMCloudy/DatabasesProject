const queryString = 'INSERT INTO Customer_Payments (OrderID, CustomerID, Amt_paid, Payment_ID) VALUES (?, ?, ?, ?);';

function insertCustomerPaymentMaker(connection) {
    return function(payment) {
        connection.query(queryString, [payment.OrderID, payment.CustomerID, 
            payment.Amt_paid, payment.Payment_ID], function(err, results, fields){
            if (err) throw err;
        });
    }
}

module.exports = insertCustomerPaymentMaker;