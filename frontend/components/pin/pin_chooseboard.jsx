import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class PinChooseboard extends React.Component {

  constructor(props) {
    super(props);
  }

  handleclick(boardId) {
    return () => {
      // debugger
      this.props.createPin(this.props.pin, boardId).then(this.props.closeModal());
    }
  }

  render() {
    return (
      <div className="pin-chooseboard-form">
        <h1>Choose Board</h1>
        <span className="close-modal" onClick={() => this.props.closeModal()}>X</span>
        <div className="img-ready-to-create">
          <img src={this.props.pin.url} className="pin-chooseboard-img"/>
        </div>
        <div className="create-pin-boards-list">
          <ul>
            {this.props.boards.map((board, idx) =>
              <li key={idx}>
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
