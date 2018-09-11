// import React from 'react';
// import { connect } from 'react-redux';
// import { Link, withRouter } from 'react-router-dom';
// import MenuBar from './nav_bar';
// import { logout } from '../../actions/session_actions';
// import { fetchUser } from '../../actions/user_actions';
//
// const mapStatetoProps = state => {
//   const currentUserId = state.session.id;
//
//   return {
//     currentUserId,
//     currentUser: state.entities.users[currentUserId]
//   };
// };
//
//
// const mapDispatchToProps = dispatch => {
//   return {
//     logout: () => dispatch(logout()),
//     fetchUser: (id) => dispatch(fetchUser(id))
//   };
// };
//
// export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(NavBar));
