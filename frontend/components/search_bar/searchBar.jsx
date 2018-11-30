import React from 'react';
import { Link, withRouter } from 'react-router-dom';
// import Select from 'react-select'

class searchBar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      search: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateForm = this.updateForm.bind(this);
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props
      .fetchPins(undefined, this.state.search )
      .then(() =>
        this.props.history.push(`/?search=${this.state.search}`)
      );
  }

  updateForm (field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }


  render () {
    // debugger
    return (
      <div>
        <form className="search-form" onSubmit={this.handleSubmit}>
          <input
            className="search-form-input"
            type="text"
            placeholder="Search"
            value={this.state.search}
            onChange={this.updateForm('search')}
          />
        <button hidden/>
        </form>
      </div>
    );
  }
}

export default withRouter(searchBar) ;
