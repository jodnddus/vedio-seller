var pool = require('./db_connect');

module.exports = () => {
    return {
        register: function() {
            pool.getConnection((err, con) => {
                var sql = 'insert into users value("gangyeonjo336@gmail.com", "asdf1145")';
                con.query(sql);
            })
        }
    }
}