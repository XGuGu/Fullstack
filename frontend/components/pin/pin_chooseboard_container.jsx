import { connect } from 'react-redux';
import { createPin} from '../../actions/pin_actions';
import { createBoard } from '../../actions/board_actions';
import { openModal } from '../../actions/modal2_actions';
import { closeModal } from '../../actions/modal2_actions';
import { requestAllBoards } from '../../actions/board_actions';
import PinChooseboard from './pin_chooseboard';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    boards: Object.values(state.entities.boards),
  };
};

const mapDispatchToProps = (dispatch) => {
  
  return {
    createPin: (pin, board_id) => dispatch(createPin(pin, board_id)),
    createBoard: board => dispatch(createBoard(board)),
    requestAllBoards: () => dispatch(requestAllBoards()),
    closeModal: () => dispatch(closeModal()),
    openModal: modal => dispatfch(openModal(modal)),
  };
};

export default connect (mapStateToProps, mapDispatchToProps)(PinChooseboard);
