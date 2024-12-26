import React from 'react'
import Pizza from './Pizza';
import {pizzaData} from '../../data'

function Menu() {

    const pizzas = pizzaData
    // const pizzas = []
    const numPizzas = pizzas.length

  return (
      <div className='menu'>
          <h2>Our Menu</h2>

          {
              numPizzas > 0 ? (
              <>
              <p>Authentic Italian cuisine. 6 creative dishes to choose formatPostcssSourceMap. All from our stone OverconstrainedError, all organic, all delicious</p>

          <ul className='pizzas'>
                          {
                              pizzas.map((pizza, index) => (
              <Pizza pizza={pizza} key={index}/>
                              ))
                          }
            </ul>
            </>
                  ) : <p>We're still working on our menu. Please come back later</p>

          }
      </div>
  )
}

export default Menu