import React from 'react';

class Likes extends React.Component {

  constructor() {
    super();

    this.state = {
      hover: false;
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
    if (this.state.props.loggedIn) {
      iconClass = mapHoverToIconClass(this.state.props.liked, this.state.hover);
    }

    return (
      <div className="like">
        <span className="icon">
          <i className={iconClass}></i>
        </span>
      </div>
    );
  }


}

export default Likes;
