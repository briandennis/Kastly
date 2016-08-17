const host = 'http://localhost:8000';

const getCastsFromFeed = (url) => {
  return new Promise( (resolve, reject) => {
    if (url) {
      feednami.load(url, (result) => {
        if (result.error) {
          reject(result.error);
        } else {
          resolve(result.feed.entries);
        }
      });
    } else {
      reject('No URL Passed');
    }
  });
}

const PodcastService = {

  get( podcastId ) {
    const getEpisodes = (cast) => {
      return new Promise( (resolve) => {
        getCastsFromFeed(cast.feedUrl)
          .then( (result) => {
            cast.episodes = result;
            resolve(cast);
          });
      })
    };

    return new Promise( (resolve, reject) => {
      if (!podcastId) {
        reject('No podcast provided.');
      } else {
        axios.get(`${host}/api/cast/${podcastId}`)
          .then( (result) => {
            if (result.data && result.data.data && result.data.data.resultCount) {
              return result.data.data.results[0];
            }
          })
          .then( (cast) => {
            getEpisodes(cast)
            .then( (cast) => {
              console.log(cast);
            })
          })
          .then( (cast) => {
            resolve(cast);
          });
      }
    });
  }
};

export {
  PodcastService
};
