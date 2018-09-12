import React from 'react';
import { withRouter } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });

  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(Object.assign({}, this.state));
  }

  render() {
    return (
      <div className="session_background">
        <div className="session_form">
          <form onSubmit={this.handleSubmit}>
            <input type='text' value={this.state.username} onChange={this.update('username')} />
            <input type='text' value={this.state.password} onChange={this.update('password')} />
            <button>{this.props.formType}</button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
