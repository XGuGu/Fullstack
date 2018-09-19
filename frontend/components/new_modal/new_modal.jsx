import React from 'react';
import { closeModal } from '../../actions/modal2_actions';
import { connect } from 'react-redux';
import BoardCreateContainer from './../board/board_create_container';
import BoardEditContainer from './../board/board_edit_container';
import PinCreateImg from './../pin/pin_create_img_container';
import PinChooseboard from './../pin/pin_chooseboard_container';
//by importing react, is our functional component implicitly
//a functional component

const Modal = (props) => {
  if (!props.modal){
    return null;
  }
  // debugger
  let component;
  switch(props.modal.modal){
    case "CreateBoard":
      component = <BoardCreateContainer />;
      break;
    case "EditBoard":
      component = <BoardEditContainer board={props.modal.board}/>;
      break;
    case "CreatePin":
      component = <PinCreateImg />;
      break;
    case "PinChooseboard":
      component = <PinChooseboard pin={props.modal.pin}/>;
      break;
    default:
      return null;
  }

  let modalStyle;
  if(props.modal === 'CreatePeg' || props.modal === 'CreateBoard'){
    modalStyle = {background: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5) )`};
  } else {
    modalStyle = {background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) )`};

  }

  return (
    <div className="my-modal-background" style={modalStyle}>
      <div className="my-modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );

};
const mapStateToProps = (state) => {
    return {
      modal: state.ui.modal,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      closeModal: () => dispatch(closeModal()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
