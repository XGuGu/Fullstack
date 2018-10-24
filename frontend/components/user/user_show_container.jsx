import { connect } from 'react-redux';
import {  Link, withRouter } from 'react-router-dom';
import UserShow from './user_show';
import { requestUser } from '../../actions/user_actions';
import { requestUserPins } from '../../actions/pin_actions';
import { requestAllBoards } from '../../actions/board_actions';
import { requestUserBoards } from '../../actions/board_actions';


const mapStateToProps = (state, ownProps) => {
  // debugger
  if (!state.entities.users[ownProps.match.params.id]) {
    return {
      loading: true,
      userId: ownProps.match.params.id,
    };
  }
  return {
    currentUser: state.entities.users[state.session.id],
    currentId: state.session.id,
    boards: Object.values(state.entities.users[ownProps.match.params.id].boards || {}),
    pins: Object.values(state.entities.users[ownProps.match.params.id].pins || {}),
    userId: ownProps.match.params.id,
    path: ownProps.location.pathname,
    currentProfile: state.entities.users[ownProps.match.params.id],
  };

};

const mapDispatchToProps = dispatch => {
  return {
    requestUser: (id) => dispatch(requestUser(id)),
    requestUserPins: (id) => dispatch(requestUserPins(id)),
    requestAllBoards: () => dispatch(requestAllBoards()),
    requestUserBoards: (userId) => dispatch(requestUserBoards(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
