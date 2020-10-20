import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import ItemListContainer from './components/ItemListContainer'



function App() {
  return (
    <div className="App">
      <NavBar> </NavBar>
      <Home greeting="Welcome"> </Home>
      <ItemListContainer title="A tu E-commerce"> </ItemListContainer>
      
      
    </div>
  );
}

export default App;
