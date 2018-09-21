import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class BoardEdit extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      board_name: this.props.board.board_name,
      id: this.props.board.id,
      user_id: this.props.board.user_id
    };

    this.handleclick = this.handleclick.bind(this);

  }

  componentDidMount(){

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
    this.props.updateBoard(this.state).then(this.props.closeModal());
  }

  handleclick(e){
    this.props.deleteBoard(this.state.id).then(this.props.history.goBack);
  }

  render(){
    return (
      <div className="edit-board-form">
      <form onSubmit={this.handleSubmit.bind(this)} >
        <div className="edit-board-first-line">
          <h1 className="edit-board-words">Edit Board</h1>
          <span className="edit-board-close-modal" onClick={() => this.props.closeModal()}>X</span>
        </div>
        <div className="edit-board-line"></div>
        <label className="edit-board-name-label">
          <span className="edit-board-name">Name</span>
          <input type="text"
            className="edit-board-name-text"
            required value={this.state.board_name}
            placeholder="Like 'Places to Go' or 'Recipes to Make' "
            onChange={this.update.bind(this)}/>
        </label>
        <div className="edit-board-line2"></div>
        <br />
        <button onClick={this.handleclick} className="board-edit-delete-button">Delete</button>
        <button className="board-edit-cancel-button" onClick={() => this.props.closeModal()}>Cancel</button>
        <input className="board-edit-save-button" type="submit" value='Save' />
        <div className="board-edit-errors">{this.renderErrors()}</div>
        </form>
      </div>

    );
  }
}

export default BoardEdit;
