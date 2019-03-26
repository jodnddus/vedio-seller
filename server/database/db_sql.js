var pool = require('./db_connect');

module.exports = () => {
    return {
        register: function(data) {
            pool.getConnection((err, con) => {
                var sql = `INSERT INTO users VALUES("${data.email}", "${data.password}", "${data.username}")`;
                con.query(sql);
            });
        }
    }
}