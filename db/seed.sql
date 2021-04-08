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
FROM '/Users/nilaipatel/Documents/HackReactor/MVP/OP/db/ReducedCurrentNBAStats.csv'
DELIMITER ','
CSV HEADER;

COPY schedule
FROM '/Users/nilaipatel/Documents/HackReactor/MVP/OP/db/CurrentNBASchedule.csv'
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
   
);

CREATE INDEX player_player ON player (player);

CREATE INDEX schedule_date ON schedule (date);

COPY player
FROM '/home/ubuntu/OP/db/ReducedCurrentNBAStats.csv'
DELIMITER ','
CSV HEADER;

COPY schedule
FROM '/home/ubuntu/OP/db/CurrentNBASchedule.csv'
DELIMITER ','
CSV HEADER;

 GRANT ALL PRIVILEGES ON TABLE TABLE_NAME TO nilai;

 sudo apt-get update -y && sudo apt-get upgrade -y
sudo apt install postgresql -y

sudo su postgres
psql -U postgres -c "CREATE ROLE ubuntu;"
psql -U postgres -c "ALTER ROLE  ubuntu  WITH LOGIN;"
psql -U postgres -c "ALTER USER  ubuntu  CREATEDB;"
psql -U postgres -c "ALTER USER  ubuntu  WITH PASSWORD 'ubuntu';"
exit

# bind 5432 to the public IP so we can access it from outside the machine
# first find the config file
sudo find / -name "postgresql.conf"
sudo nano /etc/postgresql/12/main/postgresql.conf
# edit the config file to allow listen addresses beyond localhost by adding/modifying this line: 
listen_addresses = '*'
# find the hba conf
sudo find / -name "pg_hba.conf"
sudo nano /etc/postgresql/12/main/pg_hba.conf
# add these 2 lines to the end of that file
host    all             all              0.0.0.0/0                       md5
host    all             all              ::/0                            md5

# restart the server
sudo systemctl restart postgresql

https://betterprogramming.pub/how-to-provision-a-cheap-postgresql-database-in-aws-ec2-9984ff3ddaea

