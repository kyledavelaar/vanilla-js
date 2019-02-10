const express = require('express');
const app = express();
const path = require('path');

const PORT = 4444;
const folder = 'image-cache'

app.use(express.static(path.join(__dirname, folder)));

app.use(function (req, res, next) {
  res.setHeader(`Access-Control-Allow-Origin`, `*`);
  res.setHeader(`Access-Control-Allow-Credentials`, `true`);
  res.setHeader(`Access-Control-Allow-Methods`, `GET,HEAD,OPTIONS,POST,PUT,DELETE`);
  res.setHeader(`Access-Control-Allow-Headers`, `Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers`);
  next();
});


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/' + folder + '/index.html'));
});


app.listen(PORT, () => {
  console.log('Listening on ', PORT);
});

module.exports = app;