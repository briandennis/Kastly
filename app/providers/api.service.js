const host = 'localhost:8000';

const getCastsFromFeed = (url) => new promise( (resolve, reject) => {
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

const PodcastService = {

  get( podcastId ) {
    getEpisodes = (cast) => {
      return new Promise( (resolve) => {
        getCastsFromFeed(cast.feedUrl)
          .then( (result) => {
            cast.episodes = result;
            resolve(cast);
          });
      })
    };

    if (!podcastId) return null;

    return new Promise( (resolve, reject) => {
      axios.get(`${host}/api/podcast/${podcastId}`)
        .then( (result) => {
          if (result.resultCount) {
            return result.data[0];
          }
        })
        .then( (cast) => {
          getEpisodes(cast);
        });
    });
  }
};

export {
  PodcastService
};
