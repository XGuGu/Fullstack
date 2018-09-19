import BoardShow from './board_show';
import { connect } from 'react-redux';
import { requestBoard } from '../../actions/board_actions';
import { openModal } from '../../actions/modal2_actions'

const mapStateToProps = (state, ownProps) => {
  // debugger
  let pins_in_board
  if (state.entities.boards[ownProps.match.params.boardId]) {
    pins_in_board = Object.values(state.entities.boards[ownProps.match.params.boardId].pins_belongs_to_this_board);
  } else {
    pins_in_board = [];
  }
  let user_icon
  if (state.entities.boards[ownProps.match.params.boardId]) {
    user_icon = state.entities.boards[ownProps.match.params.boardId].board_author_icon;
  } else {
    user_icon = "";
  }
  let board_name
  if (state.entities.boards[ownProps.match.params.boardId]) {
    board_name = state.entities.boards[ownProps.match.params.boardId].board_name;
  } else {
    board_name = "";
  }
  let pincount
  if (state.entities.boards[ownProps.match.params.boardId]) {
    pincount = state.entities.boards[ownProps.match.params.boardId].pincount;
  } else {
    pincount = 0;
  }
  return {
    currentBoardId: ownProps.match.params.boardId,
    pins: pins_in_board,
    board_author_icon: user_icon,
    board_name: board_name,
    pincount: pincount,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    requestBoard: id => dispatch(requestBoard(id)),
    openModal: modal => dispatch(openModal(modal)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardShow);
