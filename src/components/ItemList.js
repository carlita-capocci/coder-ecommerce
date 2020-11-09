import React from "react";
import Item from "./Item";

function ItemList({ libros }) {
  return (
    <div>
      {libros.map(({ title, price, img },idx ) => (
        <Item id={idx} title={title} price={price} img={img} />
        
      ))}
    </div>
  );
}
export default ItemList;
