function insertCallbackMaker(customer, callback) {
    return (results) => {
        var current_count = results[0]['COUNT(*)'];
        customer['IdNo'] = current_count + 1;
        customer['CreatedDate'] = new Date().toISOString().slice(0,19).replace('T', ' ');
        console.log(customer);
        callback(customer);
    }
}

function addNewCustomer(customer, client, callback) {
    var insert_callback = insertCallbackMaker(customer, callback);
    client.select({
        fields: ['COUNT(*)'],
        tables: ['Customers'],
        conditions: [
            {
                key: '1',
                value: '1'
            }
        ]
    }, insert_callback);
}

module.exports = addNewCustomer;