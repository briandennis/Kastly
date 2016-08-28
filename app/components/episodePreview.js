import React from 'react';

const EpisodePreview = (props) => {

  function cancel () {
    props.handler();
  }

  return (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{props.episode.title}
          </p>
          <button className="delete" onClick={cancel}></button>
        </header>
        <section className="modal-card-body">
          <div className="podcastAudio">
            <audio src={props.episode.link} controls="controls" />
          </div>
          <p dangerouslySetInnerHTML={{ __html: props.episode.description }}>
          </p>
        </section>
        <footer className="modal-card-foot">
          <a className="button" onClick={cancel}>Cancel</a>
        </footer>
      </div>
    </div>
  );
}

export default EpisodePreview;
