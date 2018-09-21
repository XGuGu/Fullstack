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
    let col1 = [];
    let col2 = [];
    let col3 = [];
    let col4 = [];
    let col5 = [];
    for (var i = 0; i < this.props.pins.length; i++) {
      if (i % 5 === 0) {
        col1.push(this.props.pins[i]);
      }
      if (i % 5 === 1) {
        col2.push(this.props.pins[i]);
      }
      if (i % 5 === 2) {
        col3.push(this.props.pins[i]);
      }
      if (i % 5 === 3) {
        col4.push(this.props.pins[i]);
      }
      if (i % 5 === 4) {
        col5.push(this.props.pins[i]);
      }
    }
    let editBoardIcon
    if (this.props.author_id != this.props.currentId) {
      editBoardIcon = (
        <div></div>
      );
    } else {
      editBoardIcon = (
        <div className="board-show-edit-broad"
          onClick={() => this.props.openModal({modal: 'EditBoard'} )}>
          <img src={window.board_edit} className="board-edit-img"/>
        </div>
      );
    }
    return (
      <div >
        <div className="board-show-title">
          <div className="board-show-name-and-edit">
            <div className="board-show-boardname">
              <h1 className="board-show-name">{this.props.board_name}</h1>
              <h3 className="board-show-pincount">{this.props.pincount} Pins</h3>
            </div>
            {editBoardIcon}
          </div>
          <div onClick={this.props.history.goBack} className="board-show-icon">
            <img src={this.props.board_author_icon} className="board-author-icon"></img>
          </div>
        </div>
        <div className="board-pins-wrap">
          <div className="row">
            <div className="column">
              {col1.map((pin, idx)=>
                <div className="board-index-image" key={idx} >
                  <div>
                    <Link to={`/pin/${pin.id}`} className="image-show-link">
                      <img src={pin.url} className="board-one-img" />
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <div className="column">
              {col2.map((pin, idx)=>
                <div className="board-index-image" key={idx} >
                  <div>
                    <Link to={`/pin/${pin.id}`} className="image-show-link">
                      <img src={pin.url} className="board-one-img" />
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <div className="column">
              {col3.map((pin, idx)=>
                <div className="board-index-image" key={idx} >
                  <div>
                    <Link to={`/pin/${pin.id}`} className="image-show-link">
                      <img src={pin.url} className="board-one-img" />
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <div className="column">
              {col4.map((pin, idx)=>
                <div className="board-index-image" key={idx} >
                  <div>
                    <Link to={`/pin/${pin.id}`} className="image-show-link">
                      <img src={pin.url} className="board-one-img" />
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <div className="column">
              {col5.map((pin, idx)=>
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
        </div>
      </div>
    )
  }
}

export default BoardShow;
