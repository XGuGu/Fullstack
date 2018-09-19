import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import navBar from './nav_bar';
import { requestUser } from '../../actions/user_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    currentId: state.session.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    requestUser: (id) => dispatch(requestUser(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(navBar);
