DROP TABLE IF EXISTS player;

-- CREATE TABLE player (
--   rk INTEGER NULL DEFAULT NULL,
--   player VARCHAR NULL DEFAULT NULL,
--   Pos VARCHAR NULL DEFAULT NULL,
--   Age INTEGER NULL DEFAULT NULL,
--   Tm VARCHAR NULL DEFAULT NULL,
--   G INTEGER NULL DEFAULT NULL,
--   GS INTEGER NULL DEFAULT NULL,
--   MP REAL NULL DEFAULT NULL,
--   FG REAL NULL DEFAULT NULL,
--   FGA REAL NULL DEFAULT NULL,
--   FGP REAL NULL DEFAULT NULL,
--   3P REAL NULL DEFAULT NULL,
--   3PA REAL NULL DEFAULT NULL,
--   3PP REAL NULL DEFAULT NULL,
--   2P REAL NULL DEFAULT NULL,
--   2PA REAL NULL DEFAULT NULL,
--   2PP REAL NULL DEFAULT NULL,
--   eFGP REAL NULL DEFAULT NULL,
--   FT REAL NULL DEFAULT NULL,
--   FTA REAL NULL DEFAULT NULL,
--   FTP REAL NULL DEFAULT NULL,
--   ORB REAL NULL DEFAULT NULL,
--   DRB REAL NULL DEFAULT NULL,
--   TRB REAL NULL DEFAULT NULL,
--   AST REAL NULL DEFAULT NULL,
--   STL REAL NULL DEFAULT NULL,
--   BLK REAL NULL DEFAULT NULL,
--   TOV REAL NULL DEFAULT NULL,
--   PF REAL NULL DEFAULT NULL,
--   PTS REAL NULL DEFAULT NULL,
--   PRIMARY KEY (rk)
-- );

DROP TABLE IF EXISTS schedule;

CREATE TABLE schedule (
  date VARCHAR NULL DEFAULT NULL,
  team1 VARCHAR NULL DEFAULT NULL,
  team2 VARCHAR NULL DEFAULT NULL
);

COPY player
FROM '/Users/nilaipatel/Documents/HackReactor/MVP/ReducedCurrentNBAStats.csv'
DELIMITER ','
CSV HEADER;

COPY schedule
FROM '/Users/nilaipatel/Documents/HackReactor/MVP/CurrentNBASchedule.csv'
DELIMITER ','
CSV HEADER;

CREATE TABLE player (
  Rk INTEGER NULL DEFAULT NULL,
  player VARCHAR NULL DEFAULT NULL,
  Pos VARCHAR NULL DEFAULT NULL,
  Tm VARCHAR NULL DEFAULT NULL,
  FGP REAL NULL DEFAULT NULL,
  TP REAL NULL DEFAULT NULL,
  FTP REAL NULL DEFAULT NULL,
  TRB REAL NULL DEFAULT NULL,
  AST REAL NULL DEFAULT NULL,
  STL REAL NULL DEFAULT NULL,
  BLK REAL NULL DEFAULT NULL,
  TOV REAL NULL DEFAULT NULL,
  PTS REAL NULL DEFAULT NULL,
  PRIMARY KEY (rk)
);

CREATE INDEX player_player ON player (player);