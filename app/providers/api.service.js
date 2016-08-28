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

  get ( podcastId ) {
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
            return getEpisodes(cast)
          })
          .then( (cast) => {

            const formatEpisodes = (episodes) => {
              return episodes.map( (episode) => {
                const { date, title, description} = episode;
                return {
                  date,
                  title,
                  description,
                  link: episode.enclosures ? episode.enclosures[0].url : []
                };
              });
            };
            resolve({
              id: cast.collectionId,
              name: cast.collectionName,
              image: cast.artworkUrl600 || cast.artworkUrl100,
              genre: cast.primaryGenreName,
              episodes: cast.episodes ? formatEpisodes(cast.episodes) : []
            });
          });
      }
    });
  }
};

const PlaylistService = {
  create (playlist) {
    return new Promise ( (resolve, reject) => {
      if (playlist && playlist.title && playlist.description) {
        axios.post(`${host}/api/cast/${podcastId}`, playlist)
          .then( (createdPlaylist) => {
            resolve(createdPlaylist);
          })
      } else {
        reject('Invalid playlist.');
      }
    });
  }
}

export {
  PodcastService
};
