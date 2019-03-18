const express = require('express');
const path = require('path');
const os = require('os');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.static(path.resolve(__dirname, '../build')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/api/getUsername", (req, res, next) => {
    res.send({username: os.userInfo().username});
});



app.listen(PORT, () => {
    console.log(`✅ listening on https://localhost:${PORT}`)
});