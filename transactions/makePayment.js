function updateTotalPaidCallbackMaker(payment, client) {
    return (results) => {
        client.update({
            table: 'Orders',
            updates: [
                {
                    key: 'total_amt_paid',
                    value: results[0]['SUM(Amt_paid)']
                }
            ],
            conditions: [
                {
                    key: 'Order_ID',
                    value: payment['OrderID']
                }
            ]
        });
    }
}

function insertCallbackMaker(payment, client) {
    var updateTotalPaidCallback = updateTotalPaidCallbackMaker(payment, client);
    return (results) => {
        var current_count = results[0]['COUNT(*)'];
        payment['Payment_ID'] = current_count + 1;
        client.insert.customer_payment(payment);
        client.select({
            tables: ['Customer_Payments'],
            fields: ['SUM(Amt_paid)'],
            conditions: [
                {
                    key: 'OrderID',
                    value: payment['OrderID']
                }
            ]
        }, updateTotalPaidCallback)
    }
}

function makePayment(payment, client) {
    var insert_callback = insertCallbackMaker(payment, client);
    client.select({
        fields: ['COUNT(*)'],
        tables: ['Customer_Payments'],
        conditions: [
            {
                key: '1',
                value: '1'
            }
        ]
    }, insert_callback);
}

module.exports = makePayment;