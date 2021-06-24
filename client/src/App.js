import React from 'react'; 
import Login from './pages/Login';
import SignUp from './pages/SignUp'; 
import HomePage from './pages/HomePage'; 

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router> 
      <Switch> 
        <Route exact path="/" component={Login}/>
        <Route exact path ='/signup' component={SignUp}/>
        <Route exact path = '/home' component={HomePage}/>
      </Switch>
    </Router>
  );
}

export default App;
