import React from 'react'

const RandomDrink = (props) => {
  return (
    <div>
      <p className="name">{props.name}</p>
      <p className="instruction">{props.instructions}</p>
    </div>
  );
};

export default RandomDrink;
