import React from 'react'
import ItemCount from './ItemCount'

function ItemDetail ( {item} ) {

    return <div>
        <h4> {item.title} </h4>
        <p> {item.description} </p>
        <p> {item.price} </p>
        <img src={item.img}/>


        <ItemCount stock={5} onChange={(valor) => {
            console.log(`Comprar ${valor}`)
        }
    }/>

            </div>

}

export default ItemDetail


