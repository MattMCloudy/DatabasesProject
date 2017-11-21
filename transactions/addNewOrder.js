function insertCallbackMaker(order,callback) {
    return (results) => {
        var current_count = results[0]['COUNT(*)'];
        order['Order_ID'] = current_count + 1;
        order['total_amt_paid'] = 0;
        order['Is_Paid'] = false;
        order['total_price'] = 0;
        console.log(order);
        callback(order);
    }
}

function addNewOrder(order, client, callback) {
    var insert_callback = insertCallbackMaker(order, callback);
    client.select({
        fields: ['COUNT(*)'],
        tables: ['Orders'],
        conditions: [
            {
                key: '1',
                value: '1'
            }
        ]
    }, insert_callback)
}

module.exports = addNewOrder;