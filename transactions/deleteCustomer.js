function deleteCustomer(info, client) {
    client.delete({
        table: ['Customers'],
        conditions: [
            {
                key: 'IdNo',
                value: info['CustomerId']
            }
        ]
    });
}

module.exports = deleteCustomer;