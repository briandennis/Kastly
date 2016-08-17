import React from 'react';

import { PodcastService } from './../providers/api.service.js';

import Spinner from 'react-spinner';

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

    let page = (
      <div className="columns">
        <div className="column is-12">
          <Spinner />
        </div>
      </div>
    );

    if (this.state.cast) {
      page = (
        <div className="columns" id="podcastPage">
          <div className="column is-half">
            <div className="logoContainer">
              <img className="logo" src={this.state.cast.image}></img>
            </div>
          </div>
        </div>
      );
    }

    return page;
  }

}

export default Podcast
