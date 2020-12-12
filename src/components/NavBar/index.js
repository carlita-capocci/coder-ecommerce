import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget";
import "./nav.css";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

function NavBar() {

        const [anchorEl, setAnchorEl] = React.useState(null);
        const handleClick = (event) => {
                setAnchorEl(event.currentTarget);
  };

        const handleClose = () => {
                setAnchorEl(null);
        }

  return (
          <div style={{display:'flex', flexDirection:'row', flexWrap:'nowrap', justifyContent:'space-between', alignItems:'flex-start', textAlign:'center', alignContent:'center', borderBottom:'2px solid black', backgroundColor:'white'}}> 

                  <div style={{alignSelf:'center', marginLeft:'40px'}}>

<h2 style={{fontFamily: "Crimson Text",
          fontStyle: "italic",
          fontSize: "80px"
 }}><Link to="/">La Libreria</Link></h2>

</div>

<div style={{alignSelf:'center'}}>


<Button style={{fontFamily: 'Source Serif Pro, serif', fontStyle: "italic", fontSize: "25px", color:'#0257B3'}} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
  Categorias
</Button>
<Menu
  id="simple-menu"
  anchorEl={anchorEl}
  keepMounted
  open={Boolean(anchorEl)}
  onClose={handleClose}
>
  <MenuItem onClick={handleClose}><Link to="/productos">Productos</Link></MenuItem>
  <MenuItem onClick={handleClose}><Link to="/category/5">Novedades</Link></MenuItem>
  <MenuItem onClick={handleClose}><Link to="/category/1">Ultimos ingresos</Link></MenuItem>
</Menu>

</div>

<div style={{alignSelf:'center', marginRight:'40px'}}>


<CartWidget className="justify-content-end"> </CartWidget>

</div>


    </div>
  );
}

export default NavBar;

