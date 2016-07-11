import * as axios from 'axios';

const SpotifyService = {};

SpotifyService.get = (query) => {
  return new Promise((resolve, reject) => {
    const urlizedQuery = query.split(' ').join('-');

    axios.get('https://api.spotify.com/v1/search', {
      params: {
        type: 'playlist',
        limit: 50,
        q: urlizedQuery,
      },
    }).then((data) => {
      resolve(data);
    }).catch((error) => reject({ error: true }));
  });
};

export default SpotifyService;
