import React from 'react';
import './App.css';
import Nav from './Components/Nav';
import About from './About'
// import Blog from './Blog';
import Contact from './Contact';
import Home from './Home'
import Login from './Login'
import Logout from './Logout'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <div>
      
      <Router>
        
        <Nav />
        <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/logout' component={Logout} />
        <Route path='/Home'  component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact} />
        {/* <Route path="/Blog" component={Blog} /> */}
        </Switch>
        
      </Router>
      </div>
    </div>
  );
}

export default App;
