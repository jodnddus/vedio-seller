var pool = require('./db_connect');

module.exports = () => {
    return {
        register: function(data) {
            pool.getConnection((err, con) => {
                var sql = `INSERT INTO users VALUES("${data.email}", "${data.password}", "${data.username}")`;
                con.query(sql);
            });
        },
        selectAllUsers: function() {
            var result;
            var getRows = function(data) { this.result = data; }
            var returnRows = function() { console.log(result); }
            pool.getConnection(getRows, (err, con) => {
                var sql = `SELECT * from users`;
                con.query(getRows, sql, (err, rows, fields) => {
                    console.log(rows);
                    getRows(rows);
                });
            });
            return returnRows;
        }
    }
}