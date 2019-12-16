import React from 'react';
import './App.css';
import Login from './containers/Login'
import Signup from './containers/Signup';
import CardSearch from './containers/CardSearch'
function App() {
  return (
    <div>
      <Login />
      <Signup />
      <CardSearch />
    </div>
  );
}

export default App;
