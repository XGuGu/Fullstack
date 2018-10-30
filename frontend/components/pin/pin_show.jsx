import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class PinShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    // debugger

    this.props.requestPin(this.props.match.params.pinId);
    this.props.requestUserBoards(this.props.currentId);
    
  }

  render() {
    // debugger
    return (
      <div className="pin-show-wrap">
        <div onClick={this.props.history.goBack} className="go-back-button">
          <img className="back-arrow" src={window.back_arrow}/>
          Back
        </div>
        <div className="pin-show-center">
          <div className="pin-show-save-button">
            <div className="pin-show-save" type="submit" onClick={() => this.props.openModal({modal: 'PinChooseboard', pin: this.props.pin})} >
              Save
            </div>
          </div>
          <div className="pin-show-img-wrap">
            <img src={this.props.url} className="pin-show-img"></img>
          </div>
          <div className="pin-show-author-info">
            <Link to={`/users/${this.props.author_id}`}>
              <img src={this.props.author_url} className="pin-show-author-url-icon"></img>
            </Link>
            <div className="pin-show-author-created-description">
              <div className="pin-show-author-name">
                <Link to={`/users/${this.props.author_id}`} className="pin-show-author-name-link">
                  {this.props.author} created
                </Link>
                <div className="pin-show-likes">
                   <img className="pin-show-likepin" src={window.likepin} />
                   {this.props.likes}</div>
              </div>
            <div className="pin-show-description">{this.props.description}</div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default PinShow
