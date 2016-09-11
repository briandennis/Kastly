import React from 'react';

function Footer () {
  return (
    <footer>
      <div className="container">
        <div>
          <h5 className="title is-5">
            Forged with <i className="fa fa-heart"></i> and <i className="fa fa-coffee"></i> by <a href="https://github.com/briandennis"> Brian Dennis </a>
          </h5>
        </div>
        <div className="bottom">
          <h5 className="title is-5">
            <a href="https://github.com/briandennis/kastly">
              <i className="fa fa-github"></i>
            </a>
          </h5>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
