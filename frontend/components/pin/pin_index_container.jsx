import PinIndex from './pin_index';
import { connect } from 'react-redux';
import { requestUserPins, deletePin, requestPin, createPin } from '../../actions/pin_actions';
import {openModal} from '../../actions/modal2_actions';

const mapStateToProps = (state, ownProps) => {
  // debugger
  return {
    pins: Object.values(state.entities.pins || []),
    currentId: state.session.id,
    currentUser: state.entities.users[state.session.id],
  };
};


const mapDispatchToProps = dispatch => {
  return {
    requestUserPins: (id) => dispatch(requestUserPins(id)),
    createPin: pin => dispatch(createPin(pin)),
    openModal: modal => dispatch(openModal(modal)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PinIndex);
