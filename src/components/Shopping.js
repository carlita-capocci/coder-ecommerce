import React from 'react';
import Form from './Form';
import {useCartContext} from './CartContext';
import {useAlertContext} from './AlertContext';
import { useHistory } from 'react-router-dom';




function Shopping({ onOrder }){

    const carrito= useCartContext();
    const alert= useAlertContext();
    const history= useHistory();

    return <div style={{backgroundColor:'#05AAFF', paddingTop:'30px'}}> 

      

        <div style={{border:'1px solid black', padding:'10px', width:'200px', marginRight:'auto', marginLeft:'auto', marginBottom:'30px', backgroundColor:'white'}}> Total a pagar: ${carrito.cart.reduce((acc, iw) => acc+ iw.cantidad * iw.item.price, 0)}</div>

        <p style={{fontFamily: "Crimson Text", fontStyle: "italic", fontSize: "50px", color:'white'}}>Ingresa tus datos</p>

        <Form onComprarClick={(datos)=>{
            onOrder({
                buyer: {
                    email: datos.email,
                    phone: datos.telefono,
                    name: `${datos.nombre} ${datos.apellido}`
                },
                items: carrito.cart
            }).then(order=>{
                
                alert.setOrder(order);
                carrito.empty();
                history.push('/order');
            })
        }}> </Form>  

        
    </div> 
    

}

export default Shopping 