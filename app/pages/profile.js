import React from 'react'

import { connect } from 'react-redux'

class Profile extends React.Component {

  componentWillMount () {
    if(this.props.params.userId === this.props.sessionUser.id) {
      console.log('Same user!');
    } else {
      console.log('Not same user!');
    }
  }

  render () {
    return (
      <div>
        <div className="title">
          <img src={this.state.user.image} />
          <h1>{this.state.user.name}</h1>
        </div>
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    sessionUser: state.user.user
  };
};

export default connect(mapStateToProps)(Profile)
