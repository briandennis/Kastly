import React from 'React';

export default class SearchBox extends React.Component {

  render() {
    return (
      <div className="searchContainer">
        <form>
          <input type="text" placeholder={this.props.fun}></input>
        </form>
      </div>
    );
  }
}

SearchBox.propTypes = { fun: React.PropTypes.string };
