function insertCallbackMaker(payment, callback) {
    return (results) => {
        var current_count = results[0]['COUNT(*)'];
        payment['Payment_ID'] = current_count + 1;
        callback(payment);
    }
}

function makePayment(payment, client, callback) {
    var insert_callback = insertCallbackMaker(payment, callback);
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