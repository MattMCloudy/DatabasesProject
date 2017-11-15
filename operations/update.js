const queryString = 'UPDATE ? SET ? WHERE ?;';

function updateMaker(connection) {
    return function(query) {
        var updates = query.updates.map(function(update) {return update.key + ' = ' + update.value}).join(', ');
        var conditions = query.conditions.map(function(condition) { return condition.key + ' = ' + condition.value}).join(' AND ');
        connection.query(queryString, [query.table, updates, conditions], function(err, results, fields) {
            if (err) throw err;
        });
    }
}

module.exports = updateMaker;