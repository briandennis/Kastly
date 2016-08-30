import React from 'react';

const PlaylistImage = (props) => {

  const getUnique = (episodes) => {
    const podcastSet = new Set();
    const uniqueLinks = [];

    episodes.forEach( (episode) => {
      if (!podcastSet.has(episode.image)) {
        podcastSet.set(episode.image, true);
        uniqueLinks.push(episode.image);
      }
    });

    let image = (
      <div height={`${props.size}px`} width={`${props.size}px`}>
        <img src="/static/img/defaultCastIcon.png" height="100%" width="100%"/>
      </div>
    );

    switch (uniqueLinks.length) {
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
        <div height={`${props.size}px`} width={`${props.size}px`}>
          <img src={imageLink} height="100%" width="100%"/>
        </div>
      );
    }

    function quad (imageLinkArray) {
      return (
        <div height={`${props.size}px`} width={`${props.size}px`}>
          <div height="50%" width="100%">
            <img src={imageLinkArray[0]} height="100%" width="50%" />
            <img src={imageLinkArray[1]} height="100%" width="50%" />
          </div>
          <div height="50%" width="100%">
            <img src={imageLinkArray[2]} height="100%" width="50%" />
            <img src={imageLinkArray[3]} height="100%" width="50%" />
          </div>
        </div>
      );
    }
  }

  return (
    <div>
      {getUnique(props.episode)}
    </div>
  );
}

export default PlaylistImage
