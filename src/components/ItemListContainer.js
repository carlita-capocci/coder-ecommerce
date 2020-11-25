import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";

import { getFirestore } from '../firebase' 

const getItems = () => {
  const db= getFirestore();
  const itemCollection= db.collection('items');
  const res = itemCollection.get()
  return res.then((querySnapshot) => {
    if(querySnapshot.size === 0){
      return [];
    }
    return querySnapshot.docs.map(doc => doc.data())

  })

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
    <div style={{ fontFamily: "Crimson Text", fontStyle: "italic", fontSize: "20px" }}>
      <h3>{props.title}</h3>
      <ItemList libros={items}> </ItemList>
    </div>
  );
}

export default ItemListContainer;
