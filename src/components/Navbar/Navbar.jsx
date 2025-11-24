import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <h1>MovieManiac</h1>
        <div className="navbar_links">
            <a href="">Popular<span>🔥</span></a>
            <a href="">Top Rated <span>🌟</span></a>
            <a href="">Upcoming <span>🥳</span></a>
        </div>
    </nav>
  )
}

export default Navbar