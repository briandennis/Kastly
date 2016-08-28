import React from 'react';

class Episode extends React.Component {

  constructor () {
    super();

    this.state = {
      preview: false;
    }

    this.showPreview = this.showPreview.bind(this);
  }

  showPreview () {
    this.setState({
      preview: true
    });
  }

  hidePreview () {
    this.setState({
      preview: false
    })
  }

  render () {
    // description
    let formattedDescription;
    if (this.props.episode.description) {
      console.log('description...');
      if (this.props.episode.description.length > 50) {
        formattedDescription =` ${this.props.episode.description.slice(0, 50)} ...`;
      } else {
        formattedDescription = this.props.description;
      }
    }

    // date
    let formattedDate;
    if (this.props.episode.date) {
      const date = new Date(this.props.episode.date);
      formattedDate = date.toLocaleDateString();
    }

    return (
      <tr onClick={showPreview}>
        <td> {this.props.episode.title} </td>
        <td> {formattedDescription} </td>
        <td> {formattedDate} </td>
      </tr>
    );
  }
};

const EpisodeList = (props) => {

  console.log(props.episodes);

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
