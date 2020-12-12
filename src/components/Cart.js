import React from 'react';
import {useCartContext} from './CartContext';
import Form from './Form';
import {Link} from "react-router-dom";
import { getFirestore } from '../firebase';


function Cart(){
    const dataBase= getFirestore();
    const carrito= useCartContext();
    if (carrito.cart.length === 0) {
        return (
            <div>
        <h3 style={{fontFamily: "Crimson Text", fontStyle: "italic", fontSize: "50px", color:'#00387b'}}>El carrito est&aacute; vacio</h3>
        <img src="/imagenes/book_lover.svg" width='500px'></img>

        </div>   
        )

    }

    return <div style={{backgroundColor:'#05AAFF'}}>

        <h3 style={{fontFamily: "Crimson Text", fontStyle: "italic", fontSize: "50px", color:'white'}}> Tus productos seleccionados </h3>

        {carrito.cart.map((itemWrapper)=>(

            <div style={{backgroundColor:'white', border:'1px solid black', padding:'10px', width:'300px', marginRight:'auto', marginLeft:'auto', marginBottom:'20px'}}>

         <div style={{borderRadius:'50%', width:'100px', height:'100px', backgroundImage: `url('/imagenes/${itemWrapper.item.img}')`, backgroundPosition: 'center', backgroundSize: 'cover', display:'inline-block' }}>
        </div>       

        <div style={{padding:'5px', marginRight:'auto', marginLeft:'auto', textAlign:'', marginBottom:'10px'}}> {itemWrapper.item.title}</div>

        <hr/>

        <div> Precio por unidad:  ${itemWrapper.item.price} </div>

        <div> Cantidad:  {itemWrapper.cantidad} </div>

        </div>
           
            
        ))}

<div style={{backgroundColor:'white', border:'1px solid black', padding:'10px', width:'200px', marginRight:'auto', marginLeft:'auto', marginBottom:'20px'}}> Total: ${carrito.cart.reduce((acc, iw) => acc+ iw.cantidad * iw.item.price, 0)}</div>





<Link to='/shopping'>
<button 
type="button"
style={{fontFamily: "Crimson Text", fontStyle: "italic", fontSize: "20px", width:"150px", height:"50px", margin:'10px'}}> Iniciar tu compra </button>

</Link>




     </div>



}

export default Cart;