const makePayment = require('./makePayment');

function returnPaymentMaker(product, client) {
    return (order) => {
        makePayment({
            OrderID: order[0]['Order_ID'],
            CustomerID: order[0]['CustomerId'],
            Amt_paid: product[0]['Price']
        }, client);
    }
}

function updateProductCallbackMaker(client) {
    return (product) => {
        var returnPayment = returnPaymentMaker(product, client);
        client.update({
            table: ['Products'],
            updates: [
                {
                    key: 'OrderId',
                    value: 'NULL'
                }
            ],
            conditions: [
                {
                    key: 'ProductId',
                    value: product[0]['ProductId']
                }
            ]
        });
        client.select({
            fields: ['*'],
            tables: ['Orders'],
            conditions: [
                {
                    key: 'Order_ID',
                    value: product[0]['OrderId']
                }
            ]
        }, returnPayment)
    }
}

function returnProduct(info, client) {
    var updateProductCallback = updateProductCallbackMaker(client);
    client.select({
        fields: ['*'],
        tables: ['Products'],
        conditions: [
            {
                key: 'ProductId',
                value: info['ProductID']
            }
        ]
    }, updateProductCallback)
}

module.exports = returnProduct;