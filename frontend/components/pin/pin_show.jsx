import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class PinShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    // debugger
    this.props.requestPin(this.props.match.params.pinId);
  }

  render() {
    // debugger
    return (
      <div>
        <h1> this is the pin show page</h1>
        <button onClick={this.props.history.goBack}>Go Back</button>
        <img src={this.props.url} className="pin-show-img"></img>
        <div className="pin-show-likes">likes: {this.props.likes}</div>
        <Link to={`/users/${this.props.author_id}`}> {this.props.author} created</Link>
      </div>
    );
  }
}

export default PinShow
