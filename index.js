const express = require('express');
const nunjucks = require('nunjucks');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/img', express.static('img'));

app.get('/', async function (req, res) {
  return res.sendFile("temp.html");
});

app.listen(8081, () => {
  console.log('App on');
});
