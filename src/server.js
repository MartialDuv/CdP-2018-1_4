const bodyParser = require('body-parser')
const express = require('express');
const app = express();

let path = require("path");
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(path.join(__dirname, '/js')))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const pg = require('pg');
const connectionString = 'postgres://localhost:5432/docker';

app.get('/', function(req, res) {
res.render('index');
console.log("running");
}).listen(3000);

app.get('/creaproject', function(req, res) {
  res.render('creaproject');
});

app.post('/creaproject/project', function(req, res) {
//  res.render('project');
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  const data = {text: req.body.text, complete: false};
  console.log(data);
  console.log(req.body.text)
  res.end('Salut tout le monde !');

  // const { name, amount } = req.body || {};
  // const client = new pg.Client(connectionString);
  // client.connect();
  // const query = client.query(
  //   'INSERT INTO project (name, thematic, owner, client, nb_dev, estimate_time) VALUES ($1, $2, $3, $4, $5, $6)',
  //   [name, thematic, owner, client, nb_dev, estimate_time]);
  // query.on('end', () => { client.end(); });

});


app.get('/project', function(req, res) {
  res.render('project');
});

app.get('/add_us', function(req, res) {
  res.render('add_us');
});

app.use(function(req, res, next){
  res.status(404).send('Page introuvable !');
});
