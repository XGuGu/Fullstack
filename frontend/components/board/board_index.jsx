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

// ewffaf ? eaf : ewaf
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

    let boards = this.props.boards.filter(board => board.user_id == this.props.currentId);
    // const boardPins = values(this.props.boards.)
    // debugger

    return (
      // <img src={window.new_board} className="one-board-img"/>
      <div className="board-index-outer">
        <div className="board-index">
          <div className="sub-boards">
            {createboard}

            {boards.map((board, idx)=>
              <div className="one-board" key={idx}>
                <Link to={`/users/${this.props.currentId}/boards/${board.id}`} className="board-index-one-board-link">
                    <ul className="board-index-item">
                      <div className="board-index-grid">

                        <li className="board-index-thumb-0">
                          <img src={board.pins_belongs_to_this_board[0] ? board.pins_belongs_to_this_board[0].url : window.grey_background} />
                        </li>

                        <li className="board-index-thumb-1">
                          <img src={board.pins_belongs_to_this_board[1] ? board.pins_belongs_to_this_board[1].url : window.grey_background} />
                        </li>

                        <li className="board-index-thumb-2">
                          <img src={board.pins_belongs_to_this_board[2] ? board.pins_belongs_to_this_board[2].url : window.grey_background} />
                        </li>

                        <li className="board-index-thumb-3">
                          <img src={board.pins_belongs_to_this_board[3] ? board.pins_belongs_to_this_board[3].url : window.grey_background} />
                        </li>

                        <li className="board-index-thumb-4">
                          <img src={board.pins_belongs_to_this_board[4] ? board.pins_belongs_to_this_board[4].url : window.grey_background} />
                        </li>

                        <li className="board-index-thumb-5">
                          <img src={board.pins_belongs_to_this_board[5] ? board.pins_belongs_to_this_board[5].url : window.grey_background} />
                        </li>
                      </div>
                    </ul>
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
