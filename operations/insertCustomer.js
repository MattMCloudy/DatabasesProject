const queryString = 'INSERT INTO Customers (IdNo, Name, PhoneNo, Address, Email, Username, Password, CreatedDate) VALUES (?, ?, ?, ?, ?, ?, ?, ?);';

function insertCustomerMaker(connection) {
    return function(customer) {
        connection.query(queryString, [customer.IdNo, customer.Name, customer.PhoneNo, customer.Address, 
                customer.Email, customer.Username, customer.Password,customer.CreatedDate], function(err, results, fields) {
                if (err) throw err;
        });
    }
}

module.exports = insertCustomerMaker;