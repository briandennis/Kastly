import React from 'react';

class PlaylistEditor extends React.Component {

  constructor () {
    super();

    this.validate = this.validate.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  validate () {

  }

  cancel () {

  }

  render () {
    return (
      <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">{this.props.type} Playlist
            </p>
            <button className="delete"></button>
          </header>
          <section className="modal-card-body">
            <div>
              <label class="label">
                Title
              </label>
              <p class="control">
              <input class="input" type="text" />
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
