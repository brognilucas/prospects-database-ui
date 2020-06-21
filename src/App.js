import React from 'react';
import './App.css';
import Container from './components/Container'
import { MenuProvider } from './context/MenuContext'
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <MenuProvider>
        <Router>
          <Container />
        </Router>
        <Footer />
      </MenuProvider>
    </div>
  );
}

export default App;
