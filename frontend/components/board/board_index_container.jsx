import BoardIndex from './board_index';
import { connect } from 'react-redux';
import { requestAllBoards } from '../../actions/board_actions';
import { openModal } from '../../actions/modal2_actions';

const mapStateToProps = (state, ownProps) => {
  // debugger
  return {
    boards: Object.values(state.entities.boards || []),
    currentId: ownProps.currentId || ownProps.match.params.id,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    requestAllBoards: () => dispatch(requestAllBoards()),
    closeModal: () => dispatch(closeModal()),
    openModal: modal => dispatch(openModal(modal)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardIndex);
