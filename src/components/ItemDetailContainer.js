import React,{useState, useEffect}  from 'react';
import {useParams} from 'react-router-dom';
import ItemDetail from './ItemDetail'
import libros from "./Libros";

const getItemDetail = (id) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(libros[id]);
      }, 2000);
    });
  };

function ItemDetailContainer(){
    const [item, setItems] = useState({});
    const {id}= useParams();
    useEffect(() => {
      let prom = getItemDetail(id);
      prom.then((resItems) => {
        setItems(resItems);
      });
    }, []);

    return (
        <div style={{ fontFamily: "arial", fontStyle: "italic", fontSize: "20px" }}>
          <ItemDetail item={item}/>
        </div>
      );

}


export default ItemDetailContainer