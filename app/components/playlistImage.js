import React from 'react';

const PlaylistImage = (props) => {

  const getUnique = (episodes) => {
    const podcastSet = new Set();
    const uniqueLinks = [];

    episodes.forEach( (episode) => {
      if (!podcastSet.has(episode.podcast.image)) {
        podcastSet.add(episode.podcast.image);
        uniqueLinks.push(episode.podcast.image);
      }
    });

    let image = (
      <div className={`playlistImage${props.size} single`}>
        <img src="/img/defaultCastIcon.png"/>
      </div>
    );

    switch (uniqueLinks.length) {
      case 0:
        break;
      case 1:
      case 2:
      case 3:
        image = single(uniqueLinks[0]);
        break;
      default:
        image = quad(uniqueLinks);
    }

    function single (imageLink) {
      return (
        <div className={`playlistImage${props.size} single`}>
          <img src={imageLink}/>
        </div>
      );
    }

    function quad (imageLinkArray) {
      return (
        <div className={`playlistImage${props.size} quad`}>
          <div>
            <img src={imageLinkArray[0]} />
            <img src={imageLinkArray[1]} />
          </div>
          <div>
            <img src={imageLinkArray[2]} />
            <img src={imageLinkArray[3]} />
          </div>
        </div>
      );
    }

    return image;
  }

  return (
    <div>
      {getUnique(props.episodes)}
    </div>
  );
}

export default PlaylistImage
