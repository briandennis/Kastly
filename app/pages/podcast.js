import React from 'react';

import { PodcastService } from './../providers/api.service.js';

class Podcast extends React.Component {

  componentWillMount() {
    PodcastService.get(this.props.params.castId)
      .then( (cast) => {
      })
  }

  render() {
    return (
      <div>
        {this.props.params.castId}
      </div>
    );
  }

}

export default Podcast
