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
      <div>
        <form id="create-board" onSubmit={this.handleSubmit.bind(this)}>
          <h1>Create Board</h1>
          <span className="close-modal" onClick={() => this.props.closeModal()}>X</span>
          <label className="board_name-label">
            <span>Name</span>
            <input type="text" required value={this.state.board_name} onChange={this.update.bind(this)}/>
          </label>
          <input className="create-button" type="submit" value='Create' />
          <button className="cancel-button" onClick={() => this.props.closeModal()}>Cancel</button>
          <div className="board-create-errors">{this.renderErrors()}</div>
        </form>
      </div>
    );
  }
}

export default BoardCreate;
