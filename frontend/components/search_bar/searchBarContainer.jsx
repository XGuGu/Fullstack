import { connect } from "react-redux";
import searchBar from './searchBar';
import { requestUserPins } from '../../actions/pin_actions';
import { withRouter } from 'react-router-dom'

export const mdp = ({undefined, description}) => ({
  fetchPins: (undefined, description) => dispatch(requestUserPins(undefined, description))
});

export default withRouter(connect(null, mdp)(searchBar));
