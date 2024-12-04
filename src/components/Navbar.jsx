import React from 'react'

const Navbar = () => {
  return (
    <nav>
      <div>
        <h3>{new Date().toUTCString().slice(0,16)}</h3>
        <h1>Shah Taimoor</h1>
      </div>
      <div>
        <input type="search" name='search' placeholder='Search Here'/>
      </div>
    </nav>
  )
}

export default Navbar