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
    // debugger
    let boards = this.props.boards.filter(board => board.user_id == this.props.currentUser.id);
    return (
      <div className="pin-chooseboard-form">
        <div className="pin-chooseboard-first-line">
          <h1 className="pin-chooseboard-words">Choose board</h1>
          <span className="pin-chooseboard-close-modal" onClick={() => this.props.closeModal()}>X</span>
        </div>
        <div className="pin-chooseboard-line"></div>
        <div className="pin-choose-second-part">
          <div className="img-ready-to-create">
            <img src={this.props.pin.url} className="pin-chooseboard-img"/>
          </div>
          <div className="create-pin-boards-list">
            <div className="pin-chooseboard-board-selection">
              {boards.map((board, idx) =>
                <div className="pin-chooseboard-one-board" key={idx}>
                  <input type="submit"
                    value={board.board_name}
                    className="pin-chooseboard-the-board"
                    onClick={this.handleclick(board.id)} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default PinChooseboard;
