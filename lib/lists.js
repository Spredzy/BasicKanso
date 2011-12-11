/**
 * List functions to be exported from the design doc.
 */
var templates = require('duality/templates');

exports.homepage = function (head, req) {

	console.log("Homepage");
    start({code: 200, headers: {'Content-Type': 'text/html'}});


    var row, rows = [];
    while (row = getRow()) {
        rows.push(row);
    }

	var content = templates.render('sample.html', req, {rows: rows});
	return {title: "Yanis"};
};
