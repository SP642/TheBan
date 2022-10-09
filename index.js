const express = require('express');
const nunjucks = require('nunjucks');

const bodyParser = require('body-parser');

const app = express();

nunjucks.configure('templates', { autoescape: true });

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/img', express.static('img'));

app.get('/', async function (req, res) {
  return res.send(nunjucks.render("index.html", {}));
});

app.listen(8081, () => {
  console.log('App on');
});
