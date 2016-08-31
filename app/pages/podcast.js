import React from 'react';

import { PodcastService } from './../providers/api.service.js';

import Loading from './../components/loading';
import EpisodeList from './../components/episodeList';

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
        this.setState({
          cast
        });
      })
  }

  render () {
    // set return to default value
    let page = (
      <Loading />
    );

    // if podcast loaded, set page to podcast markup
    if (this.state.cast) {

      page = (
        <div className="media-page">
          <section className="heading centerChildren">
            <div className="columns headingContainer">
              <div className="column is-half logoContainer">
                  <img className="logo" src={this.state.cast.image}></img>
              </div>
              <div className="column is-half titleContainer centerChildren">
                <h2> {this.state.cast.name} </h2>
                <p> {this.state.cast.genre} </p>
              </div>
            </div>
          </section>
          <section className="episodes">
            <EpisodeList type="podcast" episodes={this.state.cast.episodes} />
          </section>
        </div>
      );
    }

    return (
      <div className="app-container">
        {page}
      </div>
    );
  }
}

export default Podcast
