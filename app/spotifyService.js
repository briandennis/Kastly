import * as axios from 'axios';

const SpotifyService = {};

SpotifyService.get = (query) => {
  return new Promise((resolve, reject) => {
    const urlizedQuery = query.split(' ').join('-');
    
    feednami.load('http://feeds.feedburner.com/dancarlin/commonsense?format=xml', (result) => {
      console.log(result);
    });
  });
};

export default SpotifyService;
