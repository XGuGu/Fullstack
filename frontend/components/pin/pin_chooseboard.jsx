import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class PinChooseboard extends React.Component {

  handleclick(boardId) {
    return () => {
      // debugger
      this.props.createPin(this.props.pin, boardId).then(this.props.closeModal());
    }
  }

  render() {
    return (
      <div>
        <h1>Choose Board</h1>
        <span className="close-modal" onClick={() => this.props.closeModal()}>X</span>
        <div className="img-ready-to-create">
          <img src={this.props.pin.url} />
        </div>
        <div className="create-pin-boards-list">
          <ul>
            {this.props.boards.map(board =>
              <li>
                <input type="submit" value={board.board_name} onClick={this.handleclick(board.id)} />
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }

}

export default PinChooseboard;
