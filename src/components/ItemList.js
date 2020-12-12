import React from "react";
import Item from "./Item";

function ItemList({ libros }) {
  return (
    <div style={{ backgroundColor:'#05AAFF', display: 'flex', flexDirection:'row', justifyContent:'space-around', flexWrap:'wrap'}}>
      {libros.map(({ id, categoryId, title, price, img, description, stock },idx ) => (
        <Item id={id} categoryId={categoryId} title={title} price={price} img={img} description={description} stock={description} />
        
      ))}
    </div>
  );
}
export default ItemList;
