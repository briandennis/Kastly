const host = 'http://localhost:8000';

const getCastsFromFeed = (url) => {
  return new promise( (resolve, reject) => {
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
        axios.get(`${host}/api/podcast/${podcastId}`)
          .then( (result) => {
            if (result.resultCount) {
              return result.data[0];
            }
          })
          .then( (cast) => {
            getEpisodes(cast)
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
