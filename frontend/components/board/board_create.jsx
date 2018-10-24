import React from 'react';
import {  Link, withRouter } from 'react-router-dom';

class BoardCreate extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      board_name: "",
    };
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  update(e){
    this.setState({
      board_name: e.target.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    // debugger
    this.props.createBoard(this.state).then(this.props.closeModal());
  }

  render(){
    return (
      <div className="create-board-form">
        <form id="create-board" onSubmit={this.handleSubmit.bind(this)}>
          <div className="create-board-first-line">
            <h1 className="create-board-words">Create Board</h1>
            <span className="create-board-close-modal" onClick={() => this.props.closeModal()}>X</span>
          </div>
          <div className="create-board-line"></div>
          <label className="create-board-name-label">
            <span className="create-board-name">Name</span>
            <input type="text"
              className="create-board-name-text"
              placeholder="Like 'Places to Go' or 'Recipes to Make' "
              required value={this.state.board_name}
              onChange={this.update.bind(this)}/>
          </label>
          <div className="create-board-line2"></div>
          <br />
          <input className="board-create-create-button" type="submit" value='Create' />
          <button className="board-create-cancel-button" onClick={() => this.props.closeModal()}>Cancel</button>
          <div className="board-create-errors">{this.renderErrors()}</div>
        </form>
      </div>
    );
  }
}

export default BoardCreate;
