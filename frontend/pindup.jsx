import React from 'react';
import ReactDOM from 'react-dom'
import configureStore from './store/store';
import Root from './components/root';
import {requestAllPins,requestPin,createPin,updatePin,deletePin,requestUserPins}
from './actions/pin_actions';
import {requestAllBoards,requestBoard,createBoard,updateBoard,deleteBoard}
from './actions/board_actions';
import {logout} from
'./actions/session_actions';
import * as PinAPIUtil from './util/pin_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  // window.requestUserPins = PinAPIUtil.requestUserPins;
  window.PinAPIUtil = PinAPIUtil;
  window.fetchAllPins = PinAPIUtil.fetchAllPins;
  window.logout = logout;
  window.requestAllPins = requestAllPins;
  window.requestPin = requestPin;
  window.createPin = createPin;
  window.updatePin = updatePin;
  window.deletePin = deletePin;
  window.requestAllBoards = requestAllBoards;
  window.requestBoard = requestBoard;
  window.createBoard = createBoard;
  window.updateBoard = updateBoard;
  window.deleteBoard = deleteBoard;

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // ReactDOM.render(<h1>welcome</h1>, root);
  ReactDOM.render(<Root store={store}/>, root);
});
