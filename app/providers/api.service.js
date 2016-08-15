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

const Podcast = {
  get( podcastId ) {
    if (!podcastId) return null;

    return new Promise( (resolve, reject) => {
      axios.get(`${host}/api/podcast/${podcastId}`)
        .then( (data) => {
          console.log(data)
        })
    })
  }
};

export Podcast;
