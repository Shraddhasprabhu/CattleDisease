import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from './signup';
import Login from './login'; // assuming you create a Login.js component

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
