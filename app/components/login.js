import React from 'react';

class Login extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      showModal: false
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal () {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  render () {
    return (
    <div>
      <button className="button" onClick={this.toggleModal}> Log In </button>
      <div className={this.state.showModal ? 'modal is-active' : 'modal'}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Modal title</p>
            <button className="delete"></button>
          </header>
          <section className="modal-card-body">
            <a href="/login/twitter"> Login With Twitter </a> 
          </section>
          <footer className="modal-card-foot">
            <a className="button is-primary">Save changes</a>
            <a className="button" onClick={this.toggleModal}>Cancel</a>
          </footer>
        </div>
      </div>
    </div>
    );
  }
}

export default Login
