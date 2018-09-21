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
