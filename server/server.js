const express = require('express');
const path = require('path');
const api = require('./api_handler.js');
const db = require('./db.js');

const app = express();
const port = 3000;

const staticMiddleware = express.static(path.join(__dirname, '../client/dist'));

app.use(express.json());

app.use('/', staticMiddleware);

app.get('/games/:p', (req, res) => {
});

app.get('/init', (req, res) => {
  db.query('SELECT * FROM player', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
});

app.get('/search/:p', (req, res) => {
  const search = req.params.p;
  const variant = search[0].toUpperCase() + search.slice(1, search.length);
  db.query(`SELECT * FROM player WHERE player LIKE '%${search}%' OR player LIKE '%${variant}%'`, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      res.send(data);
    }
  });
});

app.listen(port);
