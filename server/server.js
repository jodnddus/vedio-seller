const express = require('express');
const path = require('path');
const os = require('os');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const sql = require('./database/db_sql')();


const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.static(path.resolve(__dirname, '../build')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var router = express.Router();

app.get("/api/getUsername", (req, res, next) => {
    res.send({username: os.userInfo().username});
});

app.post('/register', (req, res) => {
    var data = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }

    let hash = bcrypt.hashSync(data.password, 10);
    data.password = hash;

    console.log(data);

    sql.register(data);
});

//sql.register();

//db 데이터 삽입 작업 해야함

app.listen(PORT, () => {
    console.log(`✅ listening on http://localhost:${PORT}`)
});