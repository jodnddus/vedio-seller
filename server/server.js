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

    try {
        //비밀번호 암호화
        let hash = bcrypt.hashSync(data.password, 10);
        data.password = hash;
        console.log(data);

        //sql문 실행
        sql.register(data);
        res.sendStatus(200);
    } catch (error) {
        console.log(`Error is ${error}`);
    }
});

app.post('/login', (req, res) => {
    //로그인 검증 작업 구현 해야 함
    var result = sql.selectAllUsers();
    result();
    res.sendStatus(200);
})
app.listen(PORT, () => {
    console.log(`✅ listening on http://localhost:${PORT}`)
});