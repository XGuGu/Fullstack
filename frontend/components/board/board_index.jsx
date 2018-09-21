import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import BoardCreateContainer from '../board/board_create_container';

class BoardIndex extends React.Component {

  constructor(props) {
    super(props);
    // debugger
  }

  componentDidMount() {
    // debugger
    this.props.requestUserBoards(this.props.currentId);
    this.props.requestUser(this.props.currentId);
  }


  render() {
    // debugger
    let createboard;
    if (this.props.currentId != this.props.currentSession) {
      createboard = (<div></div>);
    } else {
      createboard = (
        <div className="board-index-create-broad"
          onClick={() => this.props.openModal({modal: 'CreateBoard'} )}>
          <img src={window.create_board} className="create-board-img"/>
        </div>
      );
    }
    return (
      <div className="board-index-outer">
        <div className="board-index">
          <div className="sub-boards">
            {createboard}

            {this.props.boards.map((board, idx)=>
              <div className="one-board" key={idx}>
                <Link to={`/users/${this.props.currentId}/boards/${board.id}`} className="board-index-one-board-link">
                  <img src={window.new_board} className="one-board-img"/>
                  <p className="board-index-one-board-name">{board.board_name}</p>
                  <p className="board-index-one-board-pincount">{board.pincount} Pins</p>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default BoardIndex;
