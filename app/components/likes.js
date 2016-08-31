import React from 'react';

class Likes extends React.Component {

  constructor() {
    super();

    this.state = {
      hover: false
    }

    this.mouseOver = this.mouseOver.bind(this);
    this.mouseOut = this.mouseOut.bind(this);
  }

  mouseOver () {
      this.setState({hover: true});
  }

  mouseOut () {
      this.setState({hover: false});
  }

  mapHoverToIconClass (liked, hover) {
    if (liked) {
      if (hover) {
        return 'fa fa-star-o';
      }
      return 'fa fa-star';
    } else {
      if (hover) {
        return 'fa fa-star';
      }
      return 'fa fa-star-o';
    }
  }

  render () {
    // get icon className
    let iconClass = 'fa fa-star';
    if (this.props.loggedIn) {
      iconClass = this.mapHoverToIconClass(this.props.liked, this.state.hover);
    }

    return (
      <div className="like">
          <div>
            <i className={`${iconClass} like-star`}
                onMouseOver={this.mouseOver}
                onMouseOut={this.mouseOut}
                onClick={
                  this.props.loggedIn
                  ? this.props.toggle
                  : ''
                }>
            </i>
          </div>
          <div>
            {this.props.count}
          </div>
      </div>
    );
  }
}

export default Likes;
