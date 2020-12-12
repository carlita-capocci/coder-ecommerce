import React, {Fragment, useState} from 'react';


const Formulario = ({ onComprarClick }) => {


    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [email2, setEmail2] = useState('');


    return (
        <Fragment>
            
            <div style={{textAlign:'center', border:'1px solid black', marginRight:'auto', marginLeft:'auto', width:'500px', height:'300px', padding:'15px', marginBottom:'10px', marginTop:'10px', backgroundColor:'white'}}>

            <form className="column" onSubmit={(e)=>e.preventDefault()}>
                <div style={{margin:'10px'}} className="col-md-3">
                    <input style={{width:'400px'}} type="text" placeholder="Nombre *" className="form-control" onChange={(e) => {
                        setNombre(e.target.value)
                    }} 
                    value={nombre}
                    name="nombre" Required></input>
                </div>


                <div style={{margin:'10px'}} className="col-md-3">
                    <input style={{width:'400px'}} type="text" placeholder="Apellido *" 
                    value={apellido}
                    className="form-control" onChange={(e) => setApellido(e.target.value)} name="apellido" ></input>
                </div>
                
                <div style={{margin:'10px'}} className="col-md-3">
                    <input style={{width:'400px'}} type="text" placeholder="Telefono *" 
                    value={telefono}
                    className="form-control" onChange={(e) => setTelefono(e.target.value)} name="telefono" ></input>
                </div>

                <div style={{margin:'10px'}} className="col-md-3">
                    <input style={{width:'400px'}} type="email" placeholder="Email *" 
                    value={email}
                    className="form-control" onChange={(e) => setEmail(e.target.value)}  name="email1" ></input>
                </div> 

                <div style={{margin:'10px'}} className="col-md-3">

                    <input style={{width:'400px'}} type="email" placeholder="Repetir Email *" 
                    value={email2}
                    className="form-control" onChange={(e) => setEmail2(e.target.value)}  name="email2" ></input>

                {email !== email2 ? 'Las direcciones de email no coinciden' :''}  

                </div>


            </form>

            </div>

{nombre === '' || apellido === '' || telefono === '' || email === ''? <p style={{color:'black', fontSize:'15px'}}>Campos Requeridos (*)</p> :''}



{email2 !=='' ? (
    <button onClick= {()=> {
        onComprarClick({
        nombre,
        apellido,
        telefono,
        email
    })
    }
    } style={{fontFamily: "Crimson Text",fontSize: "20px", width:"150px", height:"50px", margin:'10px', backgroundColor:'#06B2E8', color:'white', }}>Realizar Compra</button>

):''

}
         
        </Fragment>
    );
}

export default Formulario;



 
