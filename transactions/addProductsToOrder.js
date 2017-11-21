function addProductsToOrder(info, client) {
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
}

module.exports = addProductsToOrder;