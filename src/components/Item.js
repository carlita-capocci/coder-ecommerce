import React from "react";
import {Link} from "react-router-dom";

function Item({ id, title, description, price, img, stock }) {
  return (
    
      <div style={{margin:'10px'}}> 
        
        <div style={{border:'1px solid black', width:'400px', padding:'5px'}}>

          <h4> <Link to={`/detail/${id}`}>{title}</Link> </h4>
          <p style={{fontSize:'15px'}}> {'$' + price} </p> 
          <p style={{fontSize:'15px'}}> {description} </p>
          
          <img style={{border:'1px solid black', width:'200px' }} src = {`/imagenes/${img}`}  />

        </div>

      </div>
    
  );
}

export default Item;
