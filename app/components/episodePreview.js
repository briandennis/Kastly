import React from 'react';

const EpisodePreview = (props) => {

  function cancel () {
    props.handler(null);
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
          
        </section>
        <footer className="modal-card-foot">
          <a className="button is-primary" onClick={this.validate}>Save Playlist</a>
          <a className="button" onClick={this.cancel}>Cancel</a>
        </footer>
      </div>
    </div>
  );
}
