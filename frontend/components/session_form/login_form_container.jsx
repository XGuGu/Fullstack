import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { clearErrors } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    formType: 'login',
    user: {username: '',password: ''},
    navLink: <Link to="/signup" className="signup-link">Sign up</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
    switchModal: () => dispatch(openModal('signup'))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
