import React from 'react'
import dinos from '../dinos';
import Card from './Card';

function List() {
    const dinoList = dinos.map((dino)=>{
        return(
            <Card
                key={dino.id} 
                name={dino.name}
                movies={dino.movies}
            />
        )
    })
  return (
    <div>
        {dinoList}
    </div>
  )
}

export default List;