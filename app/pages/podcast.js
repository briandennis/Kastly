import React from 'react';

import { PodcastService } from './../providers/api.service.js';

class Podcast extends React.Component {

  componentWillMount() {
    PodcastService.get(this.props.castId)
      .then( (cast) => {
        this.setState({
          cast: cast
        });
      })
      .catch( (error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        {this.state.cast.episodes[0]}
      </div>
    );
  }

}

export default Podcast
