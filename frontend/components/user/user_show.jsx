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
    // debugger
    this.props.requestUser(this.props.userId);
    this.props.requestUserBoards(this.props.userId);
    this.props.requestUserPins(this.props.userId);
  }

  componentWillReceiveProps(nextProps) {
    // debugger
    if (this.props.userId != nextProps.match.params.id) {
      this.props.requestUser(nextProps.match.params.id);
      this.props.requestAllBoards();
      this.props.requestUserPins(this.props.userId);
    }
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
    // debugger
    if (this.props.loading) {
      return (
        <div>
        </div>
      );
    }
    let username = this.props.currentProfile.username.charAt(0).toUpperCase() + this.props.currentProfile.username.slice(1);
    let currentComponent
    // debugger
    if (this.props.path === `/users/${this.props.userId}`) {
      currentComponent = <BoardIndexContainer userId={this.props.userId}/>;
    } else {
      currentComponent = <div></div>;
    }

    return (
      <div>

        <div className="profile">
          <div className="profile-header-wrapper">
            <div className="profile-name">
              <div>
                <h4>{username}</h4>
                <div className="user-show-toggles">
                  <div className="boards-container">
                    <Link to={`/users/${this.props.userId}/boards`} className="board-button">
                      <span className="user-show-boards-button">Boards</span>
                    </Link>
                  </div>
                  <div className="pins-container">
                    <Link to={`/users/${this.props.userId}/pins`} className="pin-button">
                      <span className="user-show-pins-button">Pins</span>
                    </Link>
                  </div>
                </div>
              </div>

            </div>
            <div className="user-show-user-icon">
              <img className="profile-img" src={this.props.currentProfile.image_url} />
            </div>
          </div>
        </div>

        {currentComponent}
      </div>
    );
  }
}

export default UserShow;
