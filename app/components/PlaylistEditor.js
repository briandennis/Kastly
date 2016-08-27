import React from 'react';

class PlaylistEditor extends React.Component {

  constructor () {
    super();

    this.validate = this.validate.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  validate () {
    console.log('Validate data...');
    this.props.handler({playlist: 'oh yeah!'});
  }

  cancel () {
    console.log('Canceling...');
    this.props.handler(null);
  }

  render () {
    return (
      <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">{this.props.type} Playlist
            </p>
            <button className="delete" onClick={this.cancel}></button>
          </header>
          <section className="modal-card-body">
            <div>
              <label className="label">
                Title
              </label>
              <p className="control">
              <input className="input" type="text" />
              </p>
            </div>
            <div>
              <label className="label">
                Description
              </label>
              <p className="control">
              <textarea className="input" />
              </p>
            </div>
          </section>
          <footer className="modal-card-foot">
            <a className="button is-primary" onClick={this.validate}>Save Playlist</a>
            <a className="button" onClick={this.cancel}>Cancel</a>
          </footer>
        </div>
      </div>
    );
  }
}

export default PlaylistEditor;
