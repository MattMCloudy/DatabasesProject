function createTable(myArray) {
    var result = "<table border=1>";
    for(var i=0; i<myArray.length; i++) {
        result += "<tr>";
        result += "<td>"+myArray[i]['ProductId']+"</td>";
        result += "<td>"+myArray[i]['OrderId']+"</td>";
        result += "<td>"+myArray[i]['Product_Image']+"</td>";
        result += "<td>"+myArray[i]['Description']+"</td>";
        result += "<td>"+myArray[i]['Type']+"</td>";
        result += "<td>"+myArray[i]['Price']+"</td>";
        result += "</tr>";
    }
    result += "</table>";

    return result;
}

module.exports = createTable;