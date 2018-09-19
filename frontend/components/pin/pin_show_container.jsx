import PinShow from './pin_show';
import { connect } from 'react-redux';
import { requestPin } from '../../actions/pin_actions';


const mapStateToProps = (state, ownProps) => {
  // debugger
  let imgUrl;
  if (state.entities.pins[ownProps.match.params.pinId]) {
    imgUrl = state.entities.pins[ownProps.match.params.pinId].url
  } else {
    imgUrl = "";
  }
  let pinLike;
  if (state.entities.pins[ownProps.match.params.pinId]) {
    pinLike = state.entities.pins[ownProps.match.params.pinId].likes
  } else {
    pinLike = 0;
  }
  return {
    pinId: ownProps.match.params.pinId,
    url: imgUrl,
    likes: pinLike,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestPin: (id) => dispatch(requestPin(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PinShow);
