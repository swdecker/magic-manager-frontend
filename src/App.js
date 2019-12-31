import React from 'react';
import './App.css';
import Landing from './components/Landing/Landing'
import Login from './containers/Login'
import Signup from './containers/Signup';
import {
  Router,
  Switch,
  Route,
} from "react-router-dom";
import AddCardPage from './containers/AddCardPage';
import CollectionPage from './containers/CollectionPage';
import { connect } from 'react-redux';
import history from './history';

function App(props) {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Landing} >
          
        </Route>
        <Route exact path='/login' component={Login}>
          
        </Route>
        <Route exact path='/signup'>
          <Signup />
        </Route>
        {props.currentUser && <Route exact path='/addcard'>
          <AddCardPage />
</Route> }
        {props.currentUser && <Route exact path="/collection">
          <CollectionPage />
  </Route> }
    <Route>
      <Landing />
    </Route>
      </Switch>
    </Router>
  );
}
function mapStateToProps(state) {
  if(state.usersReducer.currentUser) {
    return {
      currentUser: state.usersReducer.currentUser
    }
  }
}
export default connect( mapStateToProps)(App);
