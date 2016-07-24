import * as axios from 'axios';

const Api = {};

Api.search = (query) => {
  return new Promise((resolve, reject) => {

    const baseUrl = 'http://localhost:8000/search?term=';
    const urlizedQuery = encodeURIComponent(query);
    const url = baseUrl + urlizedQuery;

    axios.get(url)
      .then( (res) => {
        const itunesObj = res.data.data;
        if(!itunesObj.error && itunesObj.results.length) {
          resolve(itunesObj.results.map( (result) => ({
            id: result.collectionId,
            artist: result.artistName,
            title: result.collectionName,
            logo: result.artworkUrl600,
            logoSmall: result.artworkUrl100,
            feed: result.feedUrl
            })
          ));
        } else {
          resolve([]);
        }
      })
      .catch(reject);
  });
};

Api.getPodcast = (url) => {
  console.log(url);
  return new Promise( (resolve, reject) =>{
    feednami.load(url, (result) => {

      console.log(result);

      if (result.error) reject();

      resolve(result);

    });
  })
};

export default Api;
