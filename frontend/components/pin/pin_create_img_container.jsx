import { connect } from 'react-redux';
import { closeModal } from './../../actions/modal2_actions';
import { openModal } from '../../actions/modal2_actions';
import {  Link, withRouter } from 'react-router-dom';
import PinCreateImg from './pin_create_img';
import { createPin,receivePinErrors } from '../../actions/pin_actions';


const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createPin: pin => dispatch(createPin(pin)),
    closeModal: () => dispatch(closeModal()),
    openModal: modal => dispatch(openModal(modal)),
  };
};

export default connect (mapStateToProps, mapDispatchToProps)(PinCreateImg);
