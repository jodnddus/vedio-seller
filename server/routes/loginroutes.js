import mysql from 'mysql';

var connection = mysql.createConnection({
    host    : 'localhost',
    user    : 'root',
    password: '111111',
    database: 'video_seller'
})

connection.connect();

