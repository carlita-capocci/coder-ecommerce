import React from 'react'
import ItemCount from './ItemCount'

function Home(props){
    return <div> 
        <h1 style={{fontFamily:'arial', fontStyle: 'italic', fontSize:'30px' }}>{props.greeting} </h1>
        <div>{props.children} </div>
        <div> <ItemCount stock= {5} initial={0} /> </div>

     </div>

    
}

export default Home