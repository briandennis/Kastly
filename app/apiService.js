import * as axios from 'axios';

const Api = {};

Api.search = (query) => {
  return new Promise((resolve, reject) => {

    const baseUrl = 'http://localhost:8000/search?term=';
    const urlizedQuery = query.split(' ').join('-');
    const url = baseUrl + urlizedQuery;

    axios.get(url)
      .then(resolve)
      .catch(reject);
  });
};

Api.getPodcast = (feed) => {
  feednami.load('http://feeds.feedburner.com/dancarlin/commonsense?format=xml', (result) => {
    console.log(result);
  });
};

export default Api;
