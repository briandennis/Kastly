import React from 'react';

class CreateComment extends React.Component {

  constructor () {
    super();

    this.state = {
      error: false,
      content: ''
    };

    this.validate = this.validate.bind(this);
    this.updateForm = this.updateForm.bind(this);
  }

  validate (e) {
    if (e.preventDefault) e.preventDefault();

    if (this.state.content && this.state.content.length < 250) {
      this.props.submitComment(this.state.content);
      this.state.content = '';
    } else {
      this.setState({ error: true });
    }
  }

  updateForm (e) {
    this.setState({ content: e.target.value });
  }

  render () {

    return (
      <div>
        <form onSubmit={this.validate}>
          <label className="label">New Comment</label>
          <p className="control">
            <textarea name="content"
                      className={
                        this.state.error
                        ? 'textarea is-danger'
                        : 'textarea'}
                      value={this.state.content}
                      onChange={this.updateForm}>
            </textarea>
          </p>
          {
            this.state.error
            ? (
              <span className="help is-danger">Comment is required and must be less than 250 characters.</span>
            )
            : ''
          }
          <div className="control">
            <button className="button is-primary">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateComment;
