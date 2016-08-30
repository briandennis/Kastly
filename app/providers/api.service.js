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
                  link: episode.enclosures ? episode.enclosures[0].url : [],
                  podcast: {
                    title: cast.collectionName,
                    castId: cast.collectionId,
                    image: cast.artworkUrl600 || cast.artworkUrl100
                  }
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
        axios.post(`${host}/api/playlist`, playlist)
          .then( (createdPlaylist) => {
            resolve(createdPlaylist);
          })
          .catch( (error) => {
            reject(error);
          });
      } else {
        reject('Invalid playlist.');
      }
    });
  },

  update (playlistId, update) {
    return new Promise ( (resolve, reject) => {
      if (playlistId && update) {
        axios.put(`${host}/api/playlist/${playlistId}`, update)
          .then ( (result) => {
            resolve(result.data);
          })
          .catch(reject);
      } else {
        reject('Invalid playlist or episodes.');
      }
    });
  },

  get (playlistId) {
    return new Promise ( (resolve, reject) => {
      if (playlistId) {
        axios.get(`${host}/api/playlist/${playlistId}`)
          .then( (result) => {
            if (result.data) {
              resolve(result.data);
            } else {
              reject();
            }
          })
          .catch( (error) => {
            reject(error);
          });
      } else {
        axios.get(`${host}/api/playlist/`)
          .then( (result) => {
            if (result.data) {
              resolve(result.data);
            } else {
              resolve([]);
            }
          })
          .catch(reject);
      }
    });
  },

  addEpisode (playlistId, episode) {
    return new Promise ( (resolve, reject) => {
      if (playlistId && episode) {
        axios.post(`${host}/api/playlist/${playlistId}/episode`, episode)
          .then(resolve)
          .catch(reject)
      } else {
        reject('Invalid playlist or episode.');
      }
    });
  }
}

const UserService = {
  get(userId) {
    return new Promise ( (resolve, reject) => {
      if (userId) {
        axios.get(`${host}/api/user/${userId}`)
          .then( (result) => {
            resolve(result.data);
          })
          .catch(reject);
      } else {
        reject('Invalid user ID.');
      }
    });
  }
}

export {
  PodcastService,
  PlaylistService,
  UserService
};
