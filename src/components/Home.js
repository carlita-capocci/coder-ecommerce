import React from 'react'

function Home(props){
    return <div> 
        <h1 style={{color:'red'}}>{props.greeting} </h1>
        <div>{props.children} </div>
     </div>
}

export default Home