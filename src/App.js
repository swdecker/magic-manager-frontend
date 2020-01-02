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
      { props.isLoggedIn ?
        <Switch>
          <Route exact path='/addcard'>
            <AddCardPage />
          </Route> 
          <Route exact path="/collection">
            <CollectionPage />
          </Route>
          <Route component={CollectionPage} />
       </Switch>
      :
      <Switch>
        <Route exact path="/" component={Landing} ></Route>
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <Route component={Landing} />
      </Switch>}
    </Router>
  );

}


function mapStateToProps(state) {
    return {
      currentUser: state.usersReducer.currentUser,
      isLoggedIn: state.usersReducer.isLoggedIn
    }
}
export default connect( mapStateToProps)(App);
