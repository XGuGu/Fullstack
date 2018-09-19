import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import BoardIndexContainer from '../board/board_index_container';
import PinIndexContainer from '../pin/pin_index_container';


class UserShow extends React.Component{
  constructor(props){
    super(props);
    // debugger
    this.state = {
      toggle: 'show_board'
    };
  }

  componentDidMount(){
    this.props.requestUser(this.props.currentId);
    this.props.requestAllBoards();
    this.props.requestUserPins(this.props.userId);
  }

  handleClick(type){
    return (e) => {
      if (type === "board") {
        this.setState({toggle: "show_board"});
      }
      else {
        this.setState({toggle: "show_pins"});
      }
    };
  }


  render(){
    let username = this.props.currentUser.username.charAt(0).toUpperCase() + this.props.currentUser.username.slice(1);
    let currentComponent
    // debugger
    if (this.props.path === `/users/${this.props.currentId}`) {
      currentComponent = <BoardIndexContainer currentId={this.props.currentId}/>;
    } else {
      currentComponent = <div></div>;
    }
    return (
      <div>

        <div className="profile">
          <div className="profile-header-wrapper">
            <div className="profile-name">
              <h4>{username}</h4>
            </div>
            <div >
              <img className="profile-img" src={this.props.currentUser.image_url} />
            </div>
          </div>
        </div>
        <br/>
        <div className="boards-and-pins">
          <div className="boards-container">
            <Link to={`/users/${this.props.currentId}/boards`} className="board-button">Boards</Link>
          </div>
          <div className="pins-container">
            <Link to={`/users/${this.props.currentId}/pins`} className="pin-button">Pins</Link>
          </div>
          {currentComponent}
          <div >
          </div>
        </div>
      </div>
    );
  }
}

export default UserShow;
