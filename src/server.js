const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
res.render('index');
console.log("running");
}).listen(3000);

app.get('/project', function(req, res) {
  res.render('creaproject');
});

app.use(function(req, res, next){
  res.status(404).send('Page introuvable !');
});
