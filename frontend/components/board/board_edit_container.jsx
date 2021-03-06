import { connect } from 'react-redux';
import { openModal } from '../../actions/modal2_actions';
import { closeModal } from '../../actions/modal2_actions';
import BoardEdit from './board_edit';
import { updateBoard, receiveBoardErrors, deleteBoard } from '../../actions/board_actions';
import { Link, withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  // debugger
  // want props.match.params.boardId
  // let number = parseInt(Object.keys(state.entities.boards)[0]);
  return {
    // board: state.entities.boards[number],
    board: state.entities.boards[ownProps.location.pathname.slice(17)],
    errors: state.errors.boards,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateBoard: board => dispatch(updateBoard(board)),
    receiveBoardErrors: errors => dispatch(receiveBoardErrors(errors)),
    deleteBoard: id => dispatch(deleteBoard(id)),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BoardEdit));
