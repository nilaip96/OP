/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
const express = require('express');
const path = require('path');

// const api = require('./api_handler.js');
const db = require('./db.js');

const app = express();
const port = 3000;

const staticMiddleware = express.static(path.join(__dirname, '../client/dist'));

app.use(express.json());

app.use('/', staticMiddleware);

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

app.post('/optimize', (req, res) => {
  const curr = new Date();
  const week = [];

  for (let i = 1; i <= 7; i += 1) {
    const first = curr.getDate() - curr.getDay() + i;
    const day = new Date(curr.setDate(first)).toISOString().slice(0, 10);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const date = `${months[Number(day.slice(5, 7)) - 1]} ${Number(day.slice(8, 10))} ${day.slice(0, 4)}`;
    week.push(date);
  }

  db.query(`SELECT * FROM schedule WHERE date LIKE '%${week[0]}%' OR date LIKE '%${week[1]}%' OR date LIKE '%${week[2]}%' OR date LIKE '%${week[3]}%' OR date LIKE '%${week[4]}%' OR date LIKE '%${week[5]}%' OR date LIKE '%${week[6]}%'`, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      req.body.forEach((player) => {
        let gameCount = 0;
        data.rows.forEach((game) => {
          if (game.team1 === player.team || game.team2 === player.team) {
            gameCount += 1;
          }
        });
        player.tp *= gameCount;
        player.trb *= gameCount;
        player.ast *= gameCount;
        player.stl *= gameCount;
        player.blk *= gameCount;
        player.tov *= gameCount;
        player.pts *= gameCount;
      });

      const FreeThrow = JSON.parse(JSON.stringify(req.body));
      FreeThrow.sort((a, b) => a.ftp - b.ftp);
      const FeildGoal = JSON.parse(JSON.stringify(req.body));
      FeildGoal.sort((a, b) => a.fgp - b.fgp);
      const ThreePoint = JSON.parse(JSON.stringify(req.body));
      ThreePoint.sort((a, b) => a.tp - b.tp);
      const Rebounds = JSON.parse(JSON.stringify(req.body));
      Rebounds.sort((a, b) => a.trb - b.trp);
      const Assists = JSON.parse(JSON.stringify(req.body));
      Assists.sort((a, b) => a.ast - b.ast);
      const Steals = JSON.parse(JSON.stringify(req.body));
      Steals.sort((a, b) => a.stl - b.stl);
      const Blocks = JSON.parse(JSON.stringify(req.body));
      Blocks.sort((a, b) => a.blk - b.blk);
      const TurnOvers = JSON.parse(JSON.stringify(req.body));
      TurnOvers.sort((a, b) => a.tov - b.tov);
      const Points = JSON.parse(JSON.stringify(req.body));
      Points.sort((a, b) => a.pts - b.pts);

      res.send(data.rows);
    }
  });
});

app.listen(port);
