import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Videoshareds from './components/Videoshareds';
import HomePage from './views/HomePage';
import Share from './views/Share';

function App() {
  return (
    <Router>
      <Switch>
        {/* <Route path="/videoshareds" component={Videoshareds}/> */}
        <Route exact path="/" component={HomePage}/>
        <Route path="/share" component={Share}/>
      </Switch>
    </Router>
  );
}

export default App;
