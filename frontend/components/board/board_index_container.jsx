import BoardIndex from './board_index';
import { connect } from 'react-redux';
import { requestUserBoards } from '../../actions/board_actions';
import { openModal } from '../../actions/modal2_actions';
import { requestUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  // debugger
  // state.entities.boards
  // let boardsArr;
  // if (ownProps.userId) {
  //   boardsArr = state.entities.users[ownProps.userId].boards;
  // } else if(state.session.id != ownProps.match.params.id) {
  //   boardsArr = state.entities.users[ownProps.match.params.id].boards;
  // }
  // else {
  //   boardsArr = state.entities.boards;
  // }
  return {
    // boards: Object.values(boardsArr || []),
    boards: Object.values(state.entities.boards || []),
    currentId: ownProps.userId || ownProps.match.params.id,
    currentSession: state.session.id,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    requestUserBoards: (userId) => dispatch(requestUserBoards(userId)),
    requestUser: (id) => dispatch(requestUser(id)),
    closeModal: () => dispatch(closeModal()),
    openModal: modal => dispatch(openModal(modal)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardIndex);
