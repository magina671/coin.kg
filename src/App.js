import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from './components/404';
import Registration from './components/registration';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/registration" component={Registration} />
          <Route path='*' component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;