import PinShow from './pin_show';
import { connect } from 'react-redux';
import { requestPin } from '../../actions/pin_actions';
import { openModal } from '../../actions/modal2_actions';
import { requestUserBoards } from '../../actions/board_actions';


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
  let author_name;
  if (state.entities.pins[ownProps.match.params.pinId]) {
    author_name = state.entities.pins[ownProps.match.params.pinId].author.username;
  } else {
    return {loading: true}
  }
  let description;
  if (state.entities.pins[ownProps.match.params.pinId]) {
    description = state.entities.pins[ownProps.match.params.pinId].description;
  } else {
    return {loading: true}
  }
  let author_url;
  if (state.entities.pins[ownProps.match.params.pinId]) {
    author_url = state.entities.pins[ownProps.match.params.pinId].author.image_url;
  } else {
    return {loading: true}
  }
  return {
    url: imgUrl,
    likes: pinLike,
    author_id: author_id,
    author:  author_name,
    pin: state.entities.pins[ownProps.match.params.pinId] || {},
    currentId: state.session.id,
    description: description,
    author_url: author_url,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestPin: (id) => dispatch(requestPin(id)),
    openModal: modal => dispatch(openModal(modal)),
    requestUserBoards: userId => dispatch(requestUserBoards(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PinShow);
