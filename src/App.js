
//External Libraries
import React, { Component } from 'react';
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';

//Internal Libraries
import AppBar from './components/AppBar/AppBar';
import BottomBar from './components/BottomBar/BottomBar';

//Page Components
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';
import ShirtFlirt from './pages/ShirtFlirt/ShirtFlirt';
import ShowCase from './pages/ShowCase/ShowCase';

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
            <Route path='/portfolio' component={Portfolio} exact/>
            <Route path='/contact' component={Contact} exact/>
            <Route path='/shirtflirt' component={ShirtFlirt} exact/>
            <Route path='/portfolio/:category' component={ShowCase} exact/>
          </Switch>
          <BottomBar />
        </div>
      </Router>
    );
  }
}

export default App;
