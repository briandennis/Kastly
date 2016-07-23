import * as axios from 'axios';

const Api = {};

Api.search = (query) => {
  return new Promise((resolve, reject) => {

    const baseUrl = 'http://localhost:8000/search?term=';
    const urlizedQuery = query.split(' ').join('-');
    const url = baseUrl + urlizedQuery;

    axios.get(url)
      .then( (res) => {
        let itunesObj = res.data.data;
        if(!itunesObj.error) {
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
  console.log('getting podcast..');
  return new Promise( (resolve, reject) =>{
    feednami.load(url, (result, error) => {

      if (error) reject(error);

      reolve(result);

    });
  })
};

export default Api;
