import React from 'react';

function Card(props) {
  var dinoImage = `https://www.nhm.ac.uk/resources/nature-online/life/dinosaurs/dinosaur-directory/images/reconstruction/small/brach.jpg`;
  console.log(dinoImage)
  return (
    <div>
      <img src={`${props.url}`} alt={`${props.name}`} />
      <div>
          <h1>{props.name}</h1>
          <p>Appearances: {props.movies}</p>
      </div>
    </div>
  )
}

export default Card