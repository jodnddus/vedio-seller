const express = require('express');
const path = require('path');
const os = require('os');
const bodyParser = require('body-parser');
const login = require('./routes/loginroutes');


const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.static(path.resolve(__dirname, '../build')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var router = express.Router();

app.get("/api/getUsername", (req, res, next) => {
    res.send({username: os.userInfo().username});
});

app.all('/register', (req, res) => {
    console.log(req.body);
})

//db 데이터 삽입 작업 해야함

app.listen(PORT, () => {
    console.log(`✅ listening on http://localhost:${PORT}`)
});