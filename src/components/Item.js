import React from "react";

function Item({ title, price, img }) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection:'column',
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}> 
        <div>
          <h4 style={{border:'1px solid black', backgroundColor:'#FAF9C1' }}> {title} </h4>
          <p> {price} </p>
          <img src={img} />
        </div>
      </div>
    </div>
  );
}

export default Item;
