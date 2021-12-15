import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from "./component/Login";
import Logout from './component/Logout';
import FriendList from "./component/FriendList";
import AddFriends from './component/AddFriends';
import Header from "./component/Header";

function App () {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/friends/add" component={AddFriends} />
          <Route exact path="/friends" component={FriendList} />
          <Route path="/logout" component={Logout} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Login} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
