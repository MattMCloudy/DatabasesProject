const queryString = 'SELECT ? FROM ? WHERE ?;';

function selectMaker(connection) {
    return function(query, callback) {
        var fields = query.fields.join(', ');
        var tables = query.tables.join(', ');
        var conditions = query.conditions.map(function(condition) { return condition.key + ' = ' + condition.value}).join(' AND ');
        connection.query('SELECT ' + fields + ' FROM ' + tables + ' WHERE ' + conditions, function(err, results, fields) {
            if (err) throw err;
            callback(results);
        });
    }
}

module.exports = selectMaker;