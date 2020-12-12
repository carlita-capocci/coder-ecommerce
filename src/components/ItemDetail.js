import React, { useState } from 'react'
import ItemCount from './ItemCount'
import {useCartContext} from './CartContext'

function ItemDetail ( {item} ) {
    const {cart, add, remove}= useCartContext();
    const [ valor, setValor] = useState(0);

    return <div style={{backgroundColor:'#05AAFF'}}>

<div style={{ border:'1px solid black', width:'500px', padding:'10px', height:'660px', fontFamily: "Crimson Text", fontStyle: "italic", fontSize: "20px", display:'inline-block', textAlign:'center', marginTop:'20px', marginBottom: '10px', backgroundColor:'white' }}>

        <h4 style={{fontSize:'40px'}}> {item.title} </h4>
        <p> {item.description} </p>
        <p> {'$' + item.price} </p>
        <img style={{border:'1px solid black', width:'180px' }} src = {`/imagenes/${item.img}`}  />

        </div>

        <ItemCount stock={item.stock} onChange={(valor) => {
            setValor(valor)
        }}/>

    
{cart.find(iw=>iw.item.id === item.id)
? <button style={{marginBottom:'150px', marginTop:'10px', width:'200px', height:'50px'}} onClick= {()=>remove(item.id)}> Quitar del carrito </button>
: <button style={{marginBottom:'150px', marginTop:'10px', width:'200px', height:'50px'}}  onClick= {()=>add({
    item,
    cantidad: valor,

    })}> Agregar al carrito </button>
}
            </div>



}

export default ItemDetail


