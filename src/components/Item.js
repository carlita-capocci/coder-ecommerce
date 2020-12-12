import React from "react";
import {Link} from "react-router-dom";

function Item({ id, title, description, price, img, stock }) {
  return (
    
      <div style={{margin:'70px', width:'200px', backgroundColor:''}}> 
        
          <h4 style={{height:'55px'}}> <Link style={{color:'white'}} to={`/detail/${id}`}>{title}</Link> </h4>


<div style={{width:'200px', height:'300px', backgroundImage:`url('/imagenes/${img}')`, backgroundSize:'contain'}}>

</div>  

        </div>

    
  );
}

export default Item;
