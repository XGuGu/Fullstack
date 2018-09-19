import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';

function Modal({modal, closeModal, loggedIn}) {
  if (loggedIn) {
    // debugger
    return null;
  }
  // debugger
  let component;
  switch (modal) {
    case 'login':
    component = <LoginFormContainer />;
      break;
    case 'signup':
    component = <SignupFormContainer />;
      break;
    default:
      component = <LoginFormContainer />;
      break;
  }

  return (
    <div className="modal-background" >
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  // debugger
  return {
    loggedIn: state.session.id,
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  // debugger
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
