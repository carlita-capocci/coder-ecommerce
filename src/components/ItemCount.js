import React,{useState} from 'react'
   
function ItemCount({stock, initial, onChange}){
    const [valor, setValor]= useState(0);
   
return <div> 

<button onClick= {()=> {
    if(valor> 0 && valor<=stock){
    setValor( valor - 1)
    onChange(valor - 1)
    }
}} style= {{margin: "10px"}} > - </button> 

{valor}


    <button onClick= {()=> {
    if(valor<stock){
    setValor( valor + 1)
    onChange(valor + 1)
    }
}} style= {{margin: "10px"}}> + </button>





</div>


}

export default ItemCount;
