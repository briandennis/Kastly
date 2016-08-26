import React from 'react'

import { connect } from 'react-redux'

class Profile extends React.Component {

  constructor() {
    super()

    this.state = {
      user: null
    };
  }

  componentWillMount () {
    if( this.props.sessionUser
        && this.props.params.userId === this.props.sessionUser.id) {
      console.log('Same user!');
    } else {
      console.log('Not same user!');
    }
  }

  render () {
    let page = <h1> Profile Page </h1>;
    if (this.state.user) {
      page = (
        <div>
          <div className="title">
            <img src={this.state.user.image} />
            <h1>{this.state.user.name}</h1>
          </div>
        </div>
      );
    }

    return page;
  }
}

const mapStateToProps = function (state) {
  console.log('Map state to props called...');
  console.log('///// ' + state.user.user + '/////');
  return {
    sessionUser: state.user.user
  };
};

export default connect(mapStateToProps)(Profile)
