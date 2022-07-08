import React from 'react';
import Card from './Card';

function List({dinos}) {
    const dinoArray = dinos.map((name, index)=>{
        return(
            <Card 
                key={index}
                name={dinos.name}
            />
        )
    }); 
    
return (
    <div>
        {dinoArray}
    </div>
  )
}

export default List
// Import Data and Card and map data over the card component