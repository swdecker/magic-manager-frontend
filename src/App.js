import React from 'react';
import './App.css';
import Landing from './components/Landing/Landing'
import Login from './containers/Login'
import Signup from './containers/Signup';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AddCardPage from './containers/AddCardPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/signup'>
          <Signup />
        </Route>
        <Route exact path='/addcard'>
          <AddCardPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
