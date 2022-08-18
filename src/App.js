import React from 'react';
import Search from './features/search/Search';
import Results from './features/results/Results';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import './App.css'

function App() {

  const images = useSelector((state) => state.search.images)

  return (
    <Container className="App" fluid="md">
        <Search />
        {
          images.length !== 0
            ? <Results />
            : null
        }
    </Container>
  );
}

export default App;
