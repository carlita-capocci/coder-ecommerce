import React from "react";
import Carousel from "./Carousel";

import ItemListContainer from "./ItemListContainer";



function Home(props) {
  return (
    <div style={{backgroundColor:'#00aaff', paddingBottom:'100px'}}>
      <h1
        style={{
          fontFamily: 'Source Serif Pro, serif',
          fontStyle: "italic",
          fontSize: "50px",
          paddingTop:'20px',
          color: 'white'
         
          
        }}
      >
        {props.greeting}{" "}
      </h1>
      <div>{props.children} </div>

      <ItemListContainer title="" categoryId={8}>
        {(items) => (
            <Carousel
              items={items}
            />
        )}
      </ItemListContainer>

      
    </div>
  );
}



export default Home;
