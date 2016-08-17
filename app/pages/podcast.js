import React from 'react';

import { PodcastService } from './../providers/api.service.js';

class Podcast extends React.Component {

  constructor () {
    super();
    this.state = {
      cast: null
    };
  }

  componentWillMount () {
    PodcastService.get(this.props.params.castId)
      .then( (cast) => {
        console.log(cast);
        this.setState({
          cast
        });
      })
  }

  render () {
    return (
      <div>
        {this.state.cast ? this.state.cast.collectionName : 'No Podcast'}
      </div>
    );
  }

}

export default Podcast
