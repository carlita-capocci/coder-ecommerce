import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import libros from './Libros';

const getItems = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(libros);
    }, 2000);
  });
};

function ItemListContainer(props) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    let prom = getItems();
    prom.then((resItems) => {
      setItems(resItems);
    });
  }, []);

  return (
    <div style={{ fontFamily: "arial", fontStyle: "italic", fontSize: "20px" }}>
      <h3>{props.title}</h3>
      <ItemList libros={items}> </ItemList>
    </div>
  );
}

export default ItemListContainer;
