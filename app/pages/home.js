import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { link } from 'react-router';

import Login from './../components/login';

const Home = (props) => {

  return (
    <div className="app-container home-page">
      <div className="columns is-multiline">
        <section className="column is-full">
          <div className="homeTitleContainer">
            <h1 className="title is-1"> Welcome to Kastly </h1>
            <h4 className="subtitle is-4 sub-heading">
              A podcast playlist website with a sense of humor.
            </h4>
          </div>
        </section>
        <section className="column is-full more-info">
            <div className="info-item">
              <div className="info-icon">
                <i className="fa fa-headphones"></i>
              </div>
              <div className="info-text">
                Search an immense library of podcasts. Seriously, there are hundreds of thousands of them.
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">
                <i className="fa fa-list"></i>
              </div>
              <div className="info-text">
                Maybe even make your own, if that is your thing. If not, that's cool too, see the third thing.
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">
                <i className="fa fa-users"></i>
              </div>
              <div className="info-text">
                Or you could take a look what other people have come up with. That can be a good time as well.
              </div>
            </div>
        </section>
        <section className="sarcastic-call-to-action">
          <div className="sarcasm-wrapper">
            <div className="sarcasm-heading">
              <h5 className="">
                Still interested? Cool cool. Check out some playlists the community have built!
              </h5>
            </div>
            <div className="sarcasm-button">
              <button className="button is-info">
                View Playlists
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loggedIn: !!state.user.user
  };
}

export default connect(mapStateToProps)(Home);
