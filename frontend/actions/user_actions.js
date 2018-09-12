import * as UserAPIUtil from '../util/user_api_util';


export const RECEIVE_USER = 'RECEIVE_USER';


export const requestUser = id => dispatch => (
  userAPIUtil.fetchUser(id)
    .then(response => dispatch({type: RECEIVE_USER,user: response}))
);
