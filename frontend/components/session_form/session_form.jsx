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

  demo(e) {
    e.preventDefault();
      let password = "123123";
      const newdemo = () => {
        setTimeout(() => {
          if (password.length>0){
            this.setState({
                username:"starwar14",
                password: this.state.password.concat(password[0])
            });
            password = password.slice(1);
            newdemo();
          }
          else{
            dispatch(login(this.state))
            .then(()=>this.props.history.push('/'));
          }
        }, 100);

      };
      newdemo();
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);

  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    let message;
    let holder;
    let button;
    let button2
    if (this.props.formType === 'signup') {
      holder = "Create a password";
      message = "Already a member?";
      button = "Log in";
      button2 = "Sign up";
    }
    else {
      holder = "Password";
      message = "Not a member?";
      button = "Sign up"
      button2 = "Continue";
    }

    return (
      <div className = "modal-page">
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <div className="logo">
            <img src={window.logo} className="svg"/>
          </div>
          <div>
            <div className="welcome">Welcome to Pindup</div>
            <div className="find">Find new ideas to try</div>
          </div>

          <div className="login-form">
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
                placeholder="Username"
              />
            <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
                placeholder={holder}
              />
            <br/>
            <input className="session-submit" type="submit" value={button2} />
            <br/>
            <br/>
            <input className="session-submit"
              onClick={(e)=>this.demo(e)} type="submit" value="Demo"/>
          </div>
           <p className="or">OR</p>
           <br/>
          <button className="bottom-button" onClick={this.props.switchModal}>{button}</button>
        </form>
        <div className="errors">{this.renderErrors()}</div>
      </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
