import React from "react";
import {Link} from "react-router-dom";

function Item({ id, title, price, img }) {
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
          <h4 style={{border:'1px solid black', backgroundColor:'#FAF9C1' }}> <Link to={`/detail/${id}`}>{title}</Link> </h4>
          <p> {price} </p>
          <img src={img} />
        </div>
      </div>
    </div>
  );
}

export default Item;
