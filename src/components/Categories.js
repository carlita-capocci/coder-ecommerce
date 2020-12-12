import React from 'react';
import ItemListContainer from './ItemListContainer'
import ItemList from './ItemList';
import {useParams} from 'react-router-dom';

const categoriesNames =[
    {id:1, name:'Ultimos Ingreso'},
    {id: 5, name:'Novedades'},
    {id:8, name:'Ficcion'}
]



function Categories(){

    const {categoryId}= useParams();
    const catId = parseInt(categoryId,10)

    return(

        <div>
                  <ItemListContainer
                  title={categoriesNames.find(c=>c.id===catId).name} categoryId={catId}>
                    {(items) => <ItemList libros={items} />}
                  </ItemListContainer>
        </div>

    )

}

export default Categories;