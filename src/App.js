import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartProvider, {CartContext} from './components/CartContext'

function App() {
  return (
    <CartProvider> 


    <Router>
      <div className="App">
        <NavBar> </NavBar>

        <Switch>
          <Route path="/list">
            <ItemListContainer title="Arma tu pedido"> </ItemListContainer>
          </Route>
          <Route path="/detail/:id">
            <ItemDetailContainer> </ItemDetailContainer>
          </Route>
          <Route path="/">
            <Home greeting="Bienvenido a tu sitio de compras"> </Home>
          </Route>
        </Switch>
      </div>
    </Router>

    </CartProvider>
  );
}

export default App;
