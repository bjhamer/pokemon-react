import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Container from 'react-bootstrap/Container';

import NoMatch from './Components/Routing/NoMatch'
import Navbar from './Components/Routing/Navbar'

import './App.css';

import PokemonSearch from './Components/PokemonSearch';

class App extends Component {
  render() {
    return (
      <Container>
        <Navbar />
        <Router>
          <Switch>
            <Route path='/' exact>
              <PokemonSearch />
            </Route>
            <Route path='*'>
              <NoMatch />
            </Route>
          </Switch>
        </Router>
      </Container>
    );
  }
}

export default App;
