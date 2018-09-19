import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import BoardCreateContainer from '../board/board_create_container';

class BoardIndex extends React.Component {

  constructor(props) {
    super(props);
    // debugger
  }

  render() {
    // debugger
    return (
      <div>

        <div className="board-index-create-broad"
          onClick={() => this.props.openModal({modal: 'CreateBoard'} )}>
          create
        </div>
        {this.props.boards.map((board, idx)=>
          <div className="board-index" key={idx} >
            <div className="one-board">
              <Link to={`/users/${this.props.currentId}/boards/${board.id}`}>{board.board_name}</Link>
            </div>
          </div>
          )}
      </div>
    )
  }
}

export default BoardIndex;
