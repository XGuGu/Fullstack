import { connect } from 'react-redux';
import { closeModal } from './../../actions/modal2_actions';
import { openModal } from '../../actions/modal2_actions';
import BoardCreate from './board_create';
import { createBoard,receiveBoardErrors } from './../../actions/board_actions';
import {  Link, withRouter } from 'react-router-dom';

const mapStateToProps = (state,ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.boards,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createBoard: board => dispatch(createBoard(board)),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    receiveBoardErrors: errors => dispatch(receiveBoardErrors(errors)),
  };
};

export default withRouter (connect (mapStateToProps, mapDispatchToProps)(BoardCreate));
