import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from './components/404';
import Registration from './components/registration';
import Autorization from './components/autorization';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          <Route path="/registration" component={Registration} />
          <Route path="/autorization" component={Autorization} />
          <Route path='*' component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;