function insertCallbackMaker(product, callback) {
    return (results) => {
        var current_count = results[0]['COUNT(*)'];
        product['ProductId'] = current_count + 1;
        product['OrderId'] = null;
        console.log(product)
        callback(product);
    }
}

function addNewProduct(product, client, callback) {
    var insert_callback = insertCallbackMaker(product, callback);
    client.select({
        fields: ['COUNT(*)'],
        tables: ['Products'],
        conditions: [
            {
                key: '1',
                value: '1'
            }
        ]
    }, insert_callback);
}

module.exports = addNewProduct;