import React from 'react';

function Card(props) {
  console.log(props);
  return (
    <div>
      <img src="" alt={`${props.name}`} />
      <div>
          <h1>{props.name}</h1>
          <p>Appearances: {props.movies}</p>
      </div>
    </div>
  )
}

export default Card