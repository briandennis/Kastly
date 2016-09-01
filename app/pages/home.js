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
                Maybe even make your own, if that is your cup of tea. If not, that's cool too, keep reading the third section.
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
        <section className="paragraphs">
          <div className="paragraphs-wrapper">
            <div className="paragraph">
              <div className="paragraph-heading">
                <h3 className="title is-3">
                  Lorem Ipsum
                </h3>
              </div>
              <div className="paragraph-content">
                <p>
                Chillwave aesthetic art party, street art scenester cronut cray pinterest blog forage   selfies. Irony fap scenester etsy austin 90's. Sartorial gastropub +1, cornhole tofu heirloom pabst hoodie four dollar toast. Fap vice scenester, lumbersexual ugh raw denim forage kogi. Wolf keytar literally, selfies sriracha pour-over listicle lo-fi. Small batch narwhal truffaut, photo booth blue bottle kitsch chicharrones fap chia banh mi pinterest whatever. Helvetica direct trade cold-pressed gastropub skateboard, leggings ennui bespoke +1 chartreuse sartorial humblebrag.
                </p>
              </div>
            </div>
            <div className="paragraph">
              <div className="paragraph-heading">
                <h3 className="title is-3">
                  Lorem Ipsum
                </h3>
              </div>
              <div className="paragraph-content">
                <p>
                  Kale chips before they sold out twee, truffaut asymmetrical bicycle rights messenger bag cold-pressed disrupt pug brunch shoreditch cred fixie marfa. Locavore tousled blog everyday carry, butcher helvetica forage. 3 wolf moon VHS meggings tacos lumbersexual. Wayfarers brunch kitsch, shoreditch crucifix kickstarter etsy master cleanse flexitarian squid venmo austin intelligentsia you probably haven't heard of them viral. Gastropub sriracha authentic normcore keffiyeh. Godard synth gastropub pug. Hammock fanny pack sriracha, brunch small batch food truck shoreditch stumptown tote bag thundercats ethical.
                </p>
              </div>
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
                  Want to reach out for some reason?
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
