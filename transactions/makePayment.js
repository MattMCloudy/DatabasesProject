function insertCallbackMaker(payment, client) {
    return (results) => {
        var current_count = results[0]['COUNT(*)'];
        payment['Payment_ID'] = current_count + 1;
        client.insert.customer_payment(payment);
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