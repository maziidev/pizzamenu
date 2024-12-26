import React from 'react'

function Footer() {

    const hour = new Date().getHours();
    console.log(hour);

    const openHour = 12
    const closeHour = 22

    const isOpen = hour >= openHour && hour <= closeHour

    // if (hour >= openHour && hour <= closeHour) alert("We're currently open"); else alert ("Sorry we're closed")
  return (
      <footer className='footer'>
          {isOpen ? (
              <div className="order">
                  <p>We're open until {closeHour}:00. Come visit us or order online.

                  </p>
                  <button className="btn">Order</button>
              </div>
          ) : (
                  <p>We're happy to welcome you between {openHour}:00 and {closeHour}:00</p>
          )}

      </footer>
  )
}

export default Footer