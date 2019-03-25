var pool = require('./db_connect');

module.exports = () => {
    return {
        register: function(data) {
            pool.getConnection((err, con) => {
                var sql = `insert into users value("${data.email}", "${data.password}")`;
                con.query(sql);
            });
        }
    }
}