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
              A community for creating and sharing podcast playlists.
            </h4>
          </div>
        </section>
        <section className="column is-full more-info">
            <div className="info-item">
              <div className="info-icon">
                <i className="fa fa-headphones"></i>
              </div>
              <div className="info-text">
                Search an immense library of podcasts. With such a large and broad selection to choose from, there is bound to be something for everyone!
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">
                <i className="fa fa-list"></i>
              </div>
              <div className="info-text">
                Take the episodes you like and make a playlist out of them! They are a great way to organize your favorite content and building one has never been easier.
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">
                <i className="fa fa-users"></i>
              </div>
              <div className="info-text">
                Check out what playlists other users have built. Favorite the ones you like and discuss with the rest of the Kastly community!
              </div>
            </div>
        </section>
        <section className="paragraphs">
          <div className="paragraphs-wrapper">
            <div className="paragraph">
              <div className="paragraph-heading">
                <h3 className="title is-3">
                  Podcasts Galore
                </h3>
              </div>
              <div className="paragraph-content">
                <p>
                Leverage the power of the world’s largest podcast library. There are hundreds of thousands of casts contained within it. Easily browse your favorites, listen to the episodes you like, and easily add them to your playlists for the most streamlined experience available.
                </p>
              </div>
            </div>
            <div className="paragraph">
              <div className="paragraph-heading">
                <h3 className="title is-3">
                  Vast Community Features
                </h3>
              </div>
              <div className="paragraph-content">
                <p>
                  Kastly provides a great environment to interact with fellow podcast aficionados. You can easily find community playlists and discuss with the authors themselves. Liking a playlist ensures you’ll always have it at your fingertips.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="sarcastic-call-to-action">
          <div className="sarcasm-wrapper">
            <div className="sarcasm-heading">
              <h5 className="">
                Still interested? Check out what the community has already built!
              </h5>
            </div>
            <div className="sarcasm-button">
              <Link to="/playlists">
                <button className="button is-info">
                  View Playlists
                </button>
              </Link>
            </div>
          </div>
        </section>
        <section className="icons-section">
          <div className="icons-section-wrapper">
            <div className="icon-block">
              <div className="icons-title">
                <h3 className="title is-3">
                  Questions? Get in touch!
                </h3>
              </div>
            </div>
            <div className="icon-block">
              <div className="icons-container">
                <div className="icons">
                  <a href="mailto:briandennis321@gmail.com">
                  <div className="contact-icon">
                    <i className="fa fa-envelope"></i>
                  </div>
                  </a>
                  <a href="https://github.com/briandennis/kastly">
                  <div className="contact-icon">
                    <i className="fa fa-github"></i>
                  </div>
                  </a>
                  <a href="https://twitter.com/briandennis321">
                    <div className="contact-icon">
                      <i className="fa fa-twitter"></i>
                    </div>
                  </a>
                </div>
              </div>
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
