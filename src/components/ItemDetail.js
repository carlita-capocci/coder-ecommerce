import React from 'react'

function ItemDetail ( {item} ) {

    return <div>
        <h4> {item.title} </h4>
        <p> {item.description} </p>
        <p> {item.price} </p>
        <img src={item.img}/>

            </div>

}

export default ItemDetail


