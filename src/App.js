import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartProvider, { CartContext } from "./components/CartContext";
import Cart from "./components/Cart";
import ShoppingContainer from "./components/ShoppingContainer";
import ItemList from "./components/ItemList";
import Alert from "./components/Alert";
import AlertProvider from "./components/AlertContext";
import Categories from './components/Categories'

function App() {
  return (
    <CartProvider>
      <AlertProvider>
        <Router>
          <div className="App">
            <NavBar> </NavBar>

            <Switch>
              <Route path="/detail/:id">
                <ItemDetailContainer> </ItemDetailContainer>
              </Route>

              <Route path="/cart">
                <Cart />
              </Route>

              <Route path="/Shopping">
                <ShoppingContainer />
              </Route>

              <Route path="/productos">
                <div>
                  <ItemListContainer title="Arma tu pedido">
                    {(items) => <ItemList libros={items} />}
                  </ItemListContainer>
                </div>
              </Route>

              <Route path="/order">
                <Alert> </Alert>
              </Route>

              <Route path="/novedades">
                <div>
                  <ItemListContainer title="Novedades" categoryId={5}>
                    {(items) => <ItemList libros={items} />}
                  </ItemListContainer>
                </div>
              </Route>

              <Route path="/ingresos">
                <div>
                  <ItemListContainer title="Ultimos Ingresos" categoryId={1}>
                    {(items) => <ItemList libros={items} />}
                  </ItemListContainer>
                </div>
              </Route>

              <Route path="/category/:categoryId">
                <Categories></Categories>
              </Route>



              <Route path="/">
                <div>
                  <Home greeting="Bienvenido a tu sitio de compras"> </Home>
                </div>
              </Route>
            </Switch>
          </div>
        </Router>
      </AlertProvider>
    </CartProvider>
  );
}

export default App;
