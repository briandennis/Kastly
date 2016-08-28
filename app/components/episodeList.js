import React from 'react';

const Episode = (props) => {

  // description
  let formattedDescription;
  if (props.episode.description) {
    console.log('description...');
    if (props.episode.description.length > 50) {
      formattedDescription =` ${props.episode.description.slice(0, 50)} ...`;
    } else {
      formattedDescription = props.description;
    }
  }

  // date
  let formattedDate;
  if (props.episode.date) {
    const date = new Date(props.episode.date);
    formattedDate = date.toLocaleDateString();
  }

  return (
    <tr>
      <td> {props.episode.title} </td>
      <td> {formattedDescription} </td>
      <td> {formattedDate} </td>
    </tr>
  );
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
