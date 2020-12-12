import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";

import { getFirestore } from '../firebase' 

const getItems = (categoryId) => {
  const db= getFirestore();
  const itemCollection= db.collection('items');
  let res;
  if (categoryId){
    res = itemCollection.where('categoryId', '==', categoryId).get()
  } else{
    res = itemCollection.get()
  }
  return res.then((querySnapshot) => {
    if(querySnapshot.size === 0){
      return [];
    }
    return querySnapshot.docs.map(doc => {
      const docData= doc.data()
      docData.id= doc.id

      return docData;
  })
  })
};

function ItemListContainer({title, categoryId, children}) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    let prom = getItems(categoryId);
    prom.then((resItems) => {
      setItems(resItems);
    });
  }, [categoryId]);

  return (
    <div style={{ fontFamily: "Crimson Text", fontStyle: "italic", fontSize: "20px"}}>
      <h3 style={{fontSize:'50px'}}>{title}</h3>
      {/* <ItemList libros={items}> </ItemList> */}
      {children(items)}
    </div>
  );
}

export default ItemListContainer;
