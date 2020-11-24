import React from "react";
import Item from "./Item";

function ItemList({ libros }) {
  return (
    <div>
      {libros.map(({ categoryId, title, price, img, description, stock },idx ) => (
        <Item categoryId={categoryId} title={title} price={price} img={img} description={description} stock={description} />
        
      ))}
    </div>
  );
}
export default ItemList;
