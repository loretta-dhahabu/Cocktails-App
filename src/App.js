import React from 'react';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Error from './components/Error';
import SingleCocktail from './components/SingleCocktail';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            Home
          </Route>
          <Route exact path="/about">About</Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
