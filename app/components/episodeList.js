import React from 'react';

import EpisodePreview from './episodePreview';

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
    console.log('Showing!');
    this.setState({
      preview: true
    });
  }

  hidePreview () {
    console.log('hidden triggered!');
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

    return (
      <tr>
        <td className="clickableTitle" onClick={this.showPreview}>
          <span className="flexItem">{this.props.episode.title}</span>
        </td>
        <td> {formattedDate} {preview}</td>
      </tr>
    );
  }
};

const EpisodeList = (props) => {

  const episodes = props.episodes
    .map( (episode, index) => {
      return <Episode key={index} episode={episode} />
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

export default EpisodeList;
