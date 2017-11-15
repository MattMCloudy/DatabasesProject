const queryString = 'INSERT INTO Products (ProductId, OrderId, Product_Image, Description, Type, Price) VALUES (?, ?, ?, ?, ?, ?);';

function insertProductMaker(connection) {
    return function(product) {
        connection.query(queryString, [product.ProductId, product.OrderId, 
            product.Product_Image, product.Description, product.Type, product.Price], 
            function(err, results, fields) {
            if (err) throw err;
        });
    }
}

module.exports = insertProductMaker;