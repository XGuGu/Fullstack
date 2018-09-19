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
      <div>
      <form onSubmit={this.handleSubmit.bind(this)} className="edit-board-form">

        <h3 className="edit-board-title">Edit Board</h3>
        <br/>
        <div className="board-edit-errors">{this.renderErrors()}</div>
        <span className="close-modal" onClick={() => this.props.closeModal()}>X</span>
        <label className="boardtitle1">
          <span>Name</span>
          <input type="text" required value={this.state.board_name} onChange={this.update.bind(this)}/>
        </label>
        <div className="submitouterdiv">
          <input className="board-update-button" type="submit" value='Update' />
        </div>
        <button className="submit-cancel-button1" onClick={() => this.props.closeModal()}>Cancel</button>
        <button onClick={this.handleclick} className="submit-delete-button12">Delete</button>
        </form>
      </div>

    );
  }
}

export default BoardEdit;
