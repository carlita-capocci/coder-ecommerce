import React,{useState, useEffect}  from 'react';
import {useParams} from 'react-router-dom';
import ItemDetail from './ItemDetail'
import { getFirestore } from '../firebase' 


const getItemDetail = (id) => {
  const db= getFirestore();
  const itemCollection= db.collection('items');
  const res = itemCollection.doc(id).get()
  return res.then((doc) => {
    
    const docData = doc.data()
    if(docData){

      docData.id = doc.id
    return docData
    }
    
  })
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

    if(!item){
      return(

        <h3>El producto no existe</h3>
      )
    }

    return (
        <div>
          {item.id ?(
            <ItemDetail item={item}/>

          ): 'loading'}
          
        </div>
      );

}


export default ItemDetailContainer