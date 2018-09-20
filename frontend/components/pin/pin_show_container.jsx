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
  let author_id;
  if (state.entities.pins[ownProps.match.params.pinId]) {
    author_id = state.entities.pins[ownProps.match.params.pinId].author_id;
  } else {
    author_id = 0;
  }
  let author;
  if (state.entities.pins[ownProps.match.params.pinId]) {
    author = state.entities.pins[ownProps.match.params.pinId].author.username;
  } else {
    return {loading: true}
  }
  return {
    url: imgUrl,
    likes: pinLike,
    author_id: author_id,
    author: author,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestPin: (id) => dispatch(requestPin(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PinShow);
