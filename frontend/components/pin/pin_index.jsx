import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class PinIndex extends React.Component {
  constructor(props) {
    super(props);
    // debugger
  }


  render() {
    return (
      <div className="pins-wrap">

        <div className="board-index-create-broad"
          onClick={() => this.props.openModal({modal: 'CreatePin'} )}>
          create
        </div>

        {this.props.pins.map((pin, idx)=>
          <div className="index-image" key={idx} >
            <div>
              <Link to={`/pin/${pin.id}`} className="image-show-link">
                <img src={pin.url} className="one-img" />
                <br />
                <button type="submit" onClick={() => this.props.openModal({modal: 'PinChooseboard', pin: pin})} >
                  save
                </button>
              </Link>
            </div>
          </div>
          )}
      </div>
    )
  }
}

export default PinIndex;
