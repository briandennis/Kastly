import React from 'react';

class PlaylistEditor {
  render() {
    return (
      <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Modal title</p>
            <button className="delete"></button>
          </header>
          <section className="modal-card-body">
            <!-- Content ... -->
          </section>
          <footer className="modal-card-foot">
            <a className="button is-primary">Save changes</a>
            <a className="button">Cancel</a>
          </footer>
        </div>
      </div>
    );
  }
}

export default PlaylistEditor;
