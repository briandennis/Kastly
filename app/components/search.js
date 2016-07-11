import React from 'React';

export default class SearchBox extends React.Component {

  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit(e) {
    if (e.preventDefault) e.preventDefault();

    const query = e.target.search.value;
    if (query) this.props.searchHandler(query);

    return false;
  }

  render() {
    return (
      <div className="searchContainer">
        <form onSubmit={this.submit}>
          <input name="search" type="text" placeholder={this.props.default}></input>
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

SearchBox.propTypes = {
  default: React.PropTypes.string,
  searchHandler: React.PropTypes.func,
};
