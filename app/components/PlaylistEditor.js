import React from 'react';

class PlaylistEditor extends React.Component {

  constructor () {
    super();

    this.state = {
      titleError: false,
      descriptionError: false
    }

    this.validate = this.validate.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  validate () {
    console.log('Validate data...');
    const title = this.refs.title.value;
    const description = this.refs.description.value;

    let titleError = false;
    let descriptionError = false;

    if (!title || title.length > 75) {
      titleError = true;
    }
    if (!description || description.length > 500) {
      descriptionError = true;
    }

    if (titleError || descriptionError) {
      this.setState({
        titleError,
        descriptionError
      });
    } else {
      this.props.handler({ title, description });
    }
  }

  cancel () {
    console.log('Canceling...');
    this.props.handler(null);
  }

  render () {
    // handle title error
    let titleClass, titleMessage;
    if (this.state.titleError) {
      titleClass = 'danger';
      titleMessage = (
        <span className="help is-danger">
          Title required and must be less than 75 characters.
        </span>
      );
    } else {
      titleClass = 'primary';
      titleMessage = <span></span>;
    }

    // handle description error
    let descriptionClass, descriptionMessage;
    if (this.state.descriptionError) {
      descriptionClass = 'danger';
      descriptionMessage = (
        <span className="help is-danger">
          Description required and must be less than 500 characters.
        </span>
      );
    } else {
      descriptionClass = 'primary';
      descriptionMessage = <span></span>;
    }

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
            <div className="createPlaylistInput">
              <label className="label">
                Title
              </label>
              <p className="control">
              <input className={`input is-${titleClass}`} type="text" ref="title" />
              {titleMessage}
              </p>
            </div>
            <div className="createPlaylistInput">
              <label className="label">
                Description
              </label>
              <p className="control">
              <textarea className={`input is-${descriptionClass}`}
                        ref="description" />
              {descriptionMessage}
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
