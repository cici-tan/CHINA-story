var mysql = require('mysql');
var express = require('express');
// var bodyParser = require('body-parser');
var router = express.Router();

// app.use(bodyParser());

router.post('/search', function (req, res, next) {

console.log("afdadf");
// var key = req.keyword;
if(key == 'food') {
    var connection = mysql.createConnection({
        host: "webyap.cqor5udgy9ug.us-west-2.rds.amazonaws.com",
        user: "cicit",
        password: "12345687",
        database: "c_hop"
    });

    connection.connect(function (err) {
        if (err) {
            console.log('Error connecting to DB');
            return;
        }
        console.log('Connection established...');
    });

    connection.query('SELECT * FROM cityTur', function (err, rows) {
        if (err) throw err;
        console.log('Correct!');
        // console.log(rows[i].cityName);
        for (var i = 0; i < rows.length; i++) {
            console.log(rows[i].cityName);
        }
        ;
        console.log(rows);
    });
    res.send('about');
}
});