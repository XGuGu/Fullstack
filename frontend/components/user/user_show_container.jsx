import { connect } from 'react-redux';
import {  Link, withRouter } from 'react-router-dom';
import UserShow from './user_show';
import { logout } from '../../actions/session_actions';


const mapStateToProps = (state,ownProps) => {

  const user = state.entities.users[ownProps.match.params.id];
  return {
    user: user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      dispatch(logout());
    }
  };
};

export default
withRouter(connect(mapStateToProps, mapDispatchToProps)(UserShow));
