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
      <div className="searchContainer column">
        <form id="searchForm" onSubmit={this.submit}>
          <div className="columns">
            <div className="column">
              <input className="input" name="search" type="text" width="100" placeholder={this.props.default}></input>
            </div>
            <div className="column">
              <button className="button is-info" type="submit">Search</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

SearchBox.propTypes = {
  default: React.PropTypes.string,
  searchHandler: React.PropTypes.func,
};
