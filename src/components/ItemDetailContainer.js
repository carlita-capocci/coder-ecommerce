import React,{useState, useEffect}  from 'react';
import ItemDetail from './ItemDetail'

const getItemDetail = () => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res({title:"Rayuela", price:"$1500"});
      }, 2000);
    });
  };

function ItemDetailContainer({id}){
    const [item, setItems] = useState([]);
    useEffect(() => {
      let prom = getItemDetail(id);
      prom.then((resItems) => {
        setItems(resItems);
      });
    }, []);

    return (
        <div style={{ fontFamily: "arial", fontStyle: "italic", fontSize: "20px" }}>
          <ItemDetail libro={item}/>
        </div>
      );

}


export default ItemDetailContainer