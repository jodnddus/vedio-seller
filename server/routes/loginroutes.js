const mysql = require('mysql');

var connection = mysql.createConnection({
    host    : 'localhost',
    user    : 'root',
    password: '111111',
    database: 'video_seller',
    port: '3306'
})

connection.connect();

exports.register = function(req, res) {
    console.log(req);
    /*connection.query('select * from users', function (error, results, fields) {
        if(error) {
            console.log(error);
        }
        console.log(results);
    });*/
}

exports.register(); 

connection.end();

//Error: ER_ACCESS_DENIED_ERROR: Access denied for user 'root'@'127.0.0.1' 이슈 해결하기