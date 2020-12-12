import React from 'react';
import {useAlertContext} from './AlertContext';

function Alert(){

    const alert= useAlertContext();

    return(

        <div style={{border:'1px solid black', height:'200px', backgroundColor:'white', marginTop:'20px', padding:'20px', marginRight:'auto', marginLeft:'auto', width:'500px'}}>  

    <h3> Se ha creado la orden: {alert.order.id} </h3>
    <h3> {alert.order.date.toString()} </h3>


        </div>
    )


}

export default Alert;