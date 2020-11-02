import React,{useState, useEffect} from 'react'


const getItems= ()=>{
    return new Promise( (res,rej)=>{
        setTimeout( ()=> {
            res(['Rascadores', 'Camas', 'Comederos'])
        }, 2000)
    });
}


function ItemListContainer(props){
    const [items, setItems] = useState([]);
    useEffect(()=> {
        let prom = getItems();
        prom.then((resItems)=>{
            setItems(resItems)
            console.log('ii')
        }) 

    }, []);

    

    return <div 

    style={{fontFamily:'arial', fontStyle: 'italic', fontSize:'20px'}}> <h3>{props.title}</h3>
    {items.map((item) => <div> {item} </div>

    )}
    
    
    </div>
}

export default ItemListContainer