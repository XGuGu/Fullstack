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
    // debugger
    
    let createpin;
    if (this.props.currentId != this.props.userId) {
      createpin = (<div className="pin-index-create-broad"></div>);
    } else {
      createpin = (
        <div className="pin-index-create-broad"
          onClick={() => this.props.openModal({modal: 'CreatePin'} )}>
          <img src={window.create_pin} className="create-pin-img"/>
        </div>
      );
    }
    let col1 = [];
    let col2 = [];
    let col3 = [];
    let col4 = [];
    let col5 = [];
    for (var i = 0; i < this.props.pins.length; i++) {
      // debugger
      if (i === 0 && this.props.currentId == this.props.userId) {
        col2.push(this.props.pins[i]);
        continue;
      }
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
    return (
      <div className="pins-wrap">

        <div className="row">
          <div className="column">
            {createpin}
            {col1.map((pin, idx)=>
              <div className="index-image" key={idx} >
                  <Link to={`/pin/${pin.id}`} className="image-show-link">
                    <img src={pin.url} className="pin-index-one-img" />
                  </Link>
                  <button type="submit"
                    className="pin-index-save-button"
                    onClick={() => this.props.openModal({modal: 'PinChooseboard', pin: pin})} >
                    save
                  </button>
              </div>
            )}
          </div>
          <div className="column">
            {col2.map((pin, idx)=>
              <div className="index-image" key={idx} >
                  <Link to={`/pin/${pin.id}`} className="image-show-link">
                    <img src={pin.url} className="pin-index-one-img" />
                    <br />
                  </Link>
                  <button type="submit"
                    className="pin-index-save-button"
                    onClick={() => this.props.openModal({modal: 'PinChooseboard', pin: pin})} >
                    save
                  </button>
              </div>
              )}
          </div>
          <div className="column">
            {col3.map((pin, idx)=>
              <div className="index-image" key={idx} >
                  <Link to={`/pin/${pin.id}`} className="image-show-link">
                    <img src={pin.url} className="pin-index-one-img" />
                    <br />
                  </Link>
                  <button type="submit"
                    className="pin-index-save-button"
                    onClick={() => this.props.openModal({modal: 'PinChooseboard', pin: pin})} >
                    save
                  </button>
              </div>
              )}
          </div>
          <div className="column">
            {col4.map((pin, idx)=>
              <div className="index-image" key={idx} >
                  <Link to={`/pin/${pin.id}`} className="image-show-link">
                    <img src={pin.url} className="pin-index-one-img" />
                    <br />
                  </Link>
                  <button type="submit"
                    className="pin-index-save-button"
                    onClick={() => this.props.openModal({modal: 'PinChooseboard', pin: pin})} >
                    save
                  </button>
              </div>
              )}
          </div>
          <div className="column">
            {col5.map((pin, idx)=>
              <div className="index-image" key={idx} >
                  <Link to={`/pin/${pin.id}`} className="image-show-link">
                    <img src={pin.url} className="pin-index-one-img" />
                    <br />
                  </Link>
                  <button type="submit"
                    className="pin-index-save-button"
                    onClick={() => this.props.openModal({modal: 'PinChooseboard', pin: pin})} >
                    save
                  </button>
              </div>
              )}
          </div>
        </div>
      </div>
    )
  }
}

export default PinIndex;
