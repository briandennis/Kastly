import React from 'react';

const EpisodePreview = (props) => {

  return (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{props.episode.title}
          </p>
          <button className="delete" onClick={props.handler}></button>
        </header>
        <section className="modal-card-body">
          <div className="podcastAudio">
            <audio src={props.episode.link} controls="controls" />
          </div>
          <p dangerouslySetInnerHTML={{ __html: props.episode.description }}>
          </p>
        </section>
        <footer className="modal-card-foot">
          <a className="button" onClick={props.handler}>Cancel</a>
        </footer>
      </div>
    </div>
  );
}

export default EpisodePreview;
