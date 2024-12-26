import React from 'react'


const Pizza = ({pizza}) => {
  return (
    <div className='pizza'>
      <img src={pizza.photoName} alt={pizza.name} />
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span>{pizza.price}</span>
      </div>
      </div>
  )
}

export default Pizza