import React from 'react';
import { Redirect, Link, NavLink } from 'react-router-dom';
import SearchBarContainer from '../search_bar/searchBarContainer';

class navBar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    debugger
    // this.props.requestUser(this.props.currentId);
  }

  render(){
    let username = this.props.currentUser.username.charAt(0).toUpperCase() + this.props.currentUser.username.slice(1);
    let userImg;
    if (this.props.currentId) {
      userImg = (<img className="user-img" src={`${this.props.currentUser.image_url}`} />)
    } else {
      userImg = (<img className="user-img" src=""/>)
    }
    return (
      <div className="navbar">
        <NavLink to="/" ><img className="navlogo" src={window.logo}/></NavLink>
        <SearchBarContainer />
        <div className="rightnav">
          <NavLink exact to="/" className='homelink'>Home</NavLink>

          <NavLink
            to={`/users/${this.props.currentId}`}
            className='profile-link'>{userImg}<p className='username'>{username}</p></NavLink>
          <a className="logout-button" onClick={() => this.props.logout()}>Log out</a>
        </div>
      </div>
    );
  }
}

export default navBar;
