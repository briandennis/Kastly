import React from 'react';

class CreateComment extends React.Component {

  const validate = (e) => {
    if (e.preventDefault) e.preventDefault();

    const content = e.target.content.value;

    console.log(content);
  }

  render (
    return (
      <div>
        <form onSubmit={this.validate}>
          <label className="label">New Comment</label>
          <p className="control">
            <textarea name="content" className={`textarea ${this.props.class}`} placeholder="Textarea"></textarea>
          </p>
          <div className="control">
            <button className="button is-primary">Submit</button>
          </div>
        </form>
      </div>
    );
  );
}

export default CreateComment;
