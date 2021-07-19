import React from "react";
import './Home'
import './Contact'
import Home from "./Home";
import Contact from "./Contact";
import Nav from "./Nav";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/contact" component={Contact}/>
        </Switch>      
    </div>
    </Router>   
  );
}

export default App;
