import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import Modal from './modal/modal';
import NewModal from './new_modal/new_modal';
import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import UserShowContainer from './user/user_show_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import PinIndexContainer from './pin/pin_index_container';
import PinShowContainer from './pin/pin_show_container';
import BoardIndexContainer from './board/board_index_container';
import BoardShowContainer from './board/board_show_container';


const App = () => {
  return (
    <div >
      <Modal />
      <NewModal />
      <ProtectedRoute path="/" component={NavBarContainer}/>
      <Switch>
        <ProtectedRoute exact path="/" component={PinIndexContainer} />
        <Route exact path="/pin/:pinId" component={PinShowContainer} />
        <Route exact path="/users/:id/boards/:boardId" component={BoardShowContainer} />
        <ProtectedRoute path="/users/:id" component={UserShowContainer} />
      </Switch>
      <Switch>
        <Route exact path="/users/:id/boards" component={BoardIndexContainer} />
        <Route exact path="/users/:id/pins" component={PinIndexContainer} />
      </Switch>
    </div>
  );
};

export default App;
