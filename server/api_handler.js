const axios = require('axios');

const games = (callback) => {
  axios.request(options)
    .then((response) => {
      callback(response.data);
    }).catch((error) => {
      console.log(error);
    });
};

module.exports.games = games;

// const options = {
//   method: 'GET',
//   url: 'https://api-nba-v1.p.rapidapi.com/games/seasonYear/2020',
//   headers: {
//     'x-rapidapi-key': 'a737974944msh02bb6890872f376p1f240fjsnbd8a25834c7c',
//     'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com'
//   }
// };
