
//External Libraries
import React, { Component } from 'react';
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import AppBar from './components/AppBar/AppBar';

//Internal Libraries

let links = [{
  to: '/',
  title: 'Home'
},{
  to: '/portfolio',
  title: 'Portfolio'
},{
  to: '/shirtflirt',
  title: 'Shirt Flirt'
},{
  to: '/contact',
  title: 'Contact'
}];

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <AppBar links={links}/>
          <Switch>
            <Route path='/' component={Home} exact/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
