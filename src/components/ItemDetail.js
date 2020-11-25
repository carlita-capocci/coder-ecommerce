import React from 'react'
import ItemCount from './ItemCount'
import {useCartContext} from './CartContext'

function ItemDetail ( {item} ) {
    const {cart, add, remove}= useCartContext();

    return <div>
        <h4> {item.title} </h4>
        <p> {item.description} </p>
        <p> {item.price} </p>
        <p> {item.stock} </p>
        <img src={item.img}/>


        <ItemCount stock={5} onChange={(valor) => {
            console.log(`Comprar ${valor}`)
        }
    }/>
{cart.find(it=>it.id === item.id)
? <button onClick= {()=>remove(item.id)}> Quitar </button>
: <button onClick= {()=>add(item)}> Agregar </button>
}
            </div>

}

export default ItemDetail


