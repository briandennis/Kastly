import React from 'react';

import { PodcastService } from './../providers/api.service.js';

import Spinner from 'react-spinkit';

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
        <div className="centerChildren" className="column is-12">
          <Spinner spinnerName="three-bounce" />
        </div>
      </div>
    );

    if (this.state.cast) {
      page = (
        <div id="podcastPage">
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
        </div>
      );
    }

    return (
      <div className="pageContainer">
        {page}
      </div>
    );
  }
}

export default Podcast
