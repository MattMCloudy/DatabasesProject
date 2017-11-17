const queryString = 'SELECT ? FROM ? WHERE ?;';

function selectMaker(connection) {
    return function(query) {
        var fields = query.fields.join(', ');
        var tables = query.tables.join(', ');
        var conditions = query.conditions.map(function(condition) { return condition.key + ' = ' + condition.value}).join(' AND ');
        connection.query(queryString, [fields, tables, conditions], function(err, results, fields) {
            if (err) throw err;
            return results;
        });
    }
}

module.exports = selectMaker;