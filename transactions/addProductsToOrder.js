function setOrderPriceMaker(info, client) {
    return (results) => {
        client.update({
            table: 'Orders',
            updates: [
                {
                    key: 'total_price',
                    value: results[0]['SUM(Price)']
                }
            ],
            conditions: [
                {
                    key: 'Order_ID',
                    value: info['OrderId']
                }
            ]
        })
    }
}

function updateOrderPriceMaker (info, client) {
    var setOrderPrice = setOrderPriceMaker(info, client);
    return (results) => {
        client.select({
            tables: ['Products'],
            fields: ['SUM(Price)'],
            conditions: [
                {
                    key: 'OrderId',
                    value: info['OrderId']
                }
            ]
        }, setOrderPrice);
    }
}

function addProductsToOrder(info, client) {
    var updateOrderPrice = updateOrderPriceMaker(info, client);
    var product_ids = info['ProductIds'].split(',')
    product_ids.forEach(function(element) {
        client.update({
           table: 'Products',
           updates: [
               {
                   key: 'OrderId',
                   value: info['OrderId']
               }
           ],
           conditions: [
               {
                   key: 'ProductId',
                   value: element
               }
           ] 
        });
    });
    setTimeout(updateOrderPrice, 5000);
}

module.exports = addProductsToOrder;