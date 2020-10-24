import React from 'react'
import CartWidget from '../CartWidget'

function NavBar(){
        return <div style={{width:'100%', height:'60px', backgroundColor:'#FAF9C1'}}> 

            <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
            <h3 style= {{marginLeft:'20px', marginTop:'10px', display:'inline', color:'green'}}> CATesorios </h3>
            <ul style={{marginTop:'20px', display: 'inline'}}>
                    <li style= {{display:'inline', paddingLeft:'3px', paddingRight:'3px'}}>Nosotros</li>
                    <li style= {{display:'inline', paddingLeft:'3px', paddingRight:'3px'}}>Productos</li>
                    <li style= {{display:'inline', paddingLeft:'3px', paddingRight:'3px'}}>Contacto</li>
            </ul>

            <CartWidget> </CartWidget> 

            </div>
            
            
            </div>;
}

export default NavBar
