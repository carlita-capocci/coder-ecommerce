import React,{useState, useEffect}  from 'react';
import ItemDetail from './ItemDetail'

const getItems = () => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res([{title:"Rayuela", price:"$1500"}]);
      }, 2000);
    });
  };

function ItemDetailContainer({items}){
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


export default ItemDetailContainer