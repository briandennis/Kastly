import React from 'react';

function CreateComment (props) {

  const validate = (e) => {
    if (e.preventDefault) e.preventDefault();

    const content = e.target.content.value;

    console.log(content);
  }

  return (
    <div>
      <form onSubmit={validate}>
        <label className="label">New Comment</label>
        <p className="control">
          <textarea name="content" className="textarea" placeholder="Textarea"></textarea>
        </p>
        <div className="control">
          <button className="button is-primary">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default CreateComment;
