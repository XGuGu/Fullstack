import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class PinIndex extends React.Component {
  constructor(props) {
    super(props);
    // debugger
  }

  componentDidMount() {
    this.props.requestUserPins(this.props.userId);
    this.props.requestUserBoards(this.props.currentId);
  }


  render() {
    let createpin;
    if (this.props.currentId != this.props.userId) {
      createpin = (<div className="pin-index-create-broad"></div>);
    } else {
      createpin = (
        <div className="pin-index-create-broad"
          onClick={() => this.props.openModal({modal: 'CreatePin'} )}>
          create
        </div>
      );
    }
    return (
      <div className="pins-wrap">

        {createpin}

        {this.props.pins.map((pin, idx)=>
          <div className="index-image" key={idx} >
            <div>
              <Link to={`/pin/${pin.id}`} className="image-show-link">
                <img src={pin.url} className="one-img" />
                <br />
              </Link>
              <button type="submit" onClick={() => this.props.openModal({modal: 'PinChooseboard', pin: pin})} >
                save
              </button>
            </div>
          </div>
          )}
      </div>
    )
  }
}

export default PinIndex;
