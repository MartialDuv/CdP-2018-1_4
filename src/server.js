const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
res.render('index');
console.log("running");
}).listen(3000);

app.get('/creaproject', function(req, res) {
  res.render('creaproject');
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
