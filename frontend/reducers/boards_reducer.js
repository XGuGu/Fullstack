import { RECEIVE_BOARDS,RECEIVE_BOARD,
  REMOVE_BOARD} from './../actions/board_actions';
import { merge } from 'lodash';

const boardsReducer = (state= {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOARDS:
    // debugger
      // return merge({}, state, action.boards);
      // debugger
      return action.boards;
    case RECEIVE_BOARD:
      return merge({}, state, {[action.board.id]: action.board});
    case REMOVE_BOARD:
      const newState = merge({}, state);
      delete newState[action.boardId];
      return newState;
    default:
      return state;
  }
};

export default boardsReducer;
