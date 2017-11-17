const queryString = 'DELETE FROM ? WHERE ?;';

function deleteMaker(connection) {
    return function(query) {
        var conditions = query.conditions.map(function(condition) { return condition.key + ' = ' + condition.value}).join(' AND ');
        connection.query(queryString, [query.table, conditions], function(err, results, fields) {
            if (err) throw err;
        });
    }
}

module.exports = deleteMaker;