import React from 'react';
import { connect } from 'react-redux';

import EpisodePreview from './episodePreview';
import AddToPlaylist from './addToPlaylist';

class Episode extends React.Component {

  constructor () {
    super();

    this.state = {
      preview: false
    }

    this.showPreview = this.showPreview.bind(this);
    this.hidePreview = this.hidePreview.bind(this);
  }

  showPreview () {
    this.setState({
      preview: true
    });
  }

  hidePreview () {
    this.setState({
      preview: false
    });
  }

  render () {
    // description
    let formattedDescription = <span></span>;
    if (this.props.episode.description) {
      if (this.props.episode.description.length > 50) {
        formattedDescription =` ${this.props.episode.description.slice(0, 50)} ...`;
      } else {
        formattedDescription = this.props.description;
      }
    }

    // date
    let formattedDate = <span></span>;
    if (this.props.episode.date) {
      const date = new Date(this.props.episode.date);
      formattedDate = date.toLocaleDateString();
    }

    // preview
    let preview = <span></span>;
    if (this.state.preview) {
      preview = <EpisodePreview episode={this.props.episode} handler={this.hidePreview} />;
    }

    // owner check
    let controls;
    if (this.props.owner) {
      controls = (
        [<td className="buttonItem" key="button1">
          <span className="icon"><i className="generalIcon fa fa-trash"></i></span>
        </td>,
        <td className="buttonItem" key="button2">
          <span className="icon"><i className="generalIcon fa fa-arrow-up"></i></span>
        </td>,
        <td className="buttonItem" key="button3">
          <span className="icon"><i className="generalIcon fa fa-arrow-down"></i></span>
        </td>]
      );
    } else {
      controls = (
        <td> <AddToPlaylist episode={this.props.episode}
                            playlists={this.props.playlists}
                            loggedIn={this.props.loggedIn}/> </td>
      );
    }

    return (
      <tr>
        <td className="clickableTitle" onClick={this.showPreview}>
          <span className="flexItem">{this.props.episode.title}</span>
        </td>
        <td> {this.props.episode.podcast.title} </td>
        <td> {formattedDate} {preview}</td>
        {controls}
      </tr>
    );
  }
};

const EpisodeList = (props) => {

  let owner = false;
  if (props.type === 'playlist' && props.owner === true) {
    owner = true;
  }

  const episodes = props.episodes
    .map( (episode, index) => {
      return <Episode key={index}
                      type={props.type}
                      episode={episode}
                      playlists={props.playlists}
                      loggedIn={props.loggedIn}
                      owner={owner}/>
    })

  return (
    <div className="episodesContainer">
      <table className="table">
        <tbody>
          {episodes}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loggedIn: !!state.user.user,
    playlists: state.playlist.playlists
  };
};

export default connect(mapStateToProps)(EpisodeList);
