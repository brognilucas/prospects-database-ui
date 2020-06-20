import React, { useState } from 'react';
import './App.css';
import Container from './components/Container'
import { MenuProvider } from './context/MenuContext'

function App() {
  return (
    <div className="App">
      <MenuProvider>
        <Container />
      </MenuProvider>
    </div>
  );
}

export default App;
