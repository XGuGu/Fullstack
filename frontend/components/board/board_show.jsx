import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class BoardShow extends React.Component {

  constructor(props) {
    super(props);
    // debugger
  }

  componentDidMount() {
    // debugger
    this.props.requestBoard(this.props.currentBoardId);
  }

  render() {
    // debugger
    return (
      <div >
        <h1>{this.props.board_name}</h1>
        <h3>{this.props.pincount} Pins</h3>
        <div className="board-show-edit-broad"
          onClick={() => this.props.openModal({modal: 'EditBoard'} )}>
          edit this board
        </div>
        <div onClick={this.props.history.goBack}>
          <img src={this.props.board_author_icon} className="board-author-icon"></img>
        </div>
        <div className="board-pins-wrap">
          {this.props.pins.map((pin, idx)=>
            <div className="board-index-image" key={idx} >
              <div>
                <Link to={`/pin/${pin.id}`} className="image-show-link">
                  <img src={pin.url} className="board-one-img" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default BoardShow;
