const queryString = 'INSERT INTO Orders (Order_ID, CustomerId, total_amt_paid, total_price, Is_Paid) VALUES (?, ?, ?, ?, ?);';

function insertOrderMaker(connection) {
    return function(order) {
        connection.query(queryString, [order.Order_ID, order.CustomerId, 
            order.total_amt_paid, order.total_price, order.Is_Paid], function(err, results, fields) {
            if (err) throw err;
        });
    }
}

module.exports = insertOrderMaker;