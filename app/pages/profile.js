import React from 'react'

class Profile extends React.Component {
  render () {
    return (
      <div>
        <div className="title">
          <img src={this.props.user.image} />
          <h1>{this.props.user.name}</h1>
        </div>
      </div>
    );
  }
}
