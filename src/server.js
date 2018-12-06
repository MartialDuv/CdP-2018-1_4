const bodyParser = require('body-parser')
const express = require('express');
const app = express();

let path = require("path");
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(path.join(__dirname, '/js')))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const pg = require('pg');
//const connectionString = 'postgres://localhost:5432/docker';
const config = {
    user: 'cdp',
    database: 'docker',
    port: 5432
};

// pool takes the object above -config- as parameter
const pool = new pg.Pool(config);


app.get('/', function(req, res) {
res.render('index');
console.log("running");
}).listen(3000);

app.get('/creaproject', function(req, res) {
  res.render('creaproject');
});

app.post('/creaproject', function(req, res) {
  res.setHeader('Content-Type', 'application/json');

  // const client = new pg.Client(connectionString);
  // client.connect();

  pool.connect(function (err, client, done) {
      if (err) {
          console.log("Can not connect to the DB" + err);
      }
      const insert = 'INSERT INTO project (name, thematic, owner, client, nb_dev, estimate_time) VALUES ($1, $2, $3, $4, $5, $6)'
      const values = [req.body.name, req.body.thematic, req.body.owner, req.body.client, req.body.nb_dev, req.body.estimate_time];

      pool.query(insert, values, (err, res) => {
        if (err) {
          console.log(err.stack)
        } else {
          console.log(res.rows[0])
        }
      })
      done();
  })
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
