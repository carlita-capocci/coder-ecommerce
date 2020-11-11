import React from 'react'
import {Link} from 'react-router-dom';
import CartWidget from '../CartWidget'


function NavBar(){
        return <div style={{width:'100%', height:'60px', backgroundColor:'#FAF9C1', borderBottom: '1px solid black'}}> 

            <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                
            <h3 style= {{marginLeft:'20px', marginTop:'10px', display:'inline', color:'green'}}> <Link to="/"> La Libreria </Link> </h3>

            <ul style={{marginTop:'20px', display: 'inline'}}>
                    
                    <li style= {{display:'inline', paddingLeft:'3px', paddingRight:'3px'}}><Link to="/list"> Productos </Link></li>
                  
            </ul>

            <CartWidget> </CartWidget> 

            </div>
            
            
            </div>;
}

export default NavBar
