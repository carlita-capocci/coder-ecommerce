import React from 'react'
import {Link} from "react-router-dom";
import {useCartContext} from './CartContext';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function CartWidget({ className}){
    const carrito = useCartContext()
   
    return <Link to='/cart' className={className}>
        <span style={{ color: 'black', backgroundColor: 'white'}}>{carrito.cart.length > 0  ? carrito.cart.reduce((acc, iw) => acc+ iw.cantidad, 0) :''}</span>
<ShoppingCartIcon></ShoppingCartIcon>

    </Link> 
};

export default CartWidget