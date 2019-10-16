import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';

import './App.css';

import PokemonSearch from './Components/PokemonSearch';

class App extends Component {
  render() {
    return (
      <Container>
        <PokemonSearch />
      </Container>
    );
  }
}

export default App;
