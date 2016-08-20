var mysql = require('mysql');
var connection = mysql.createConnection({
    host:"webyap.cqor5udgy9ug.us-west-2.rds.amazonaws.com",
    user: "cicit",
    password: "12345687",
    database: "user50"
});

connection.connect(function (err) {
    if(err){
        console.log('Error connecting to DB');
        return;
    }
    console.log('Connection established...');
});

connection.query('SELECT * FROM business', function (err, rows) {
    if(err) throw err;
    
    // console.log(rows[i].busname);
    for (var i = 0; i < rows.length; i++){
        console.log(rows[i].busname);
    };
    console.log(rows);
});