import React from 'react';

function Card(props) {
  console.log(props);
  return (
    <div>
        <h1>{props.name}</h1>
        <p>Appearances: {props.movies}</p>
    </div>
  )
}

export default Card