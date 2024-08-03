import React from 'react'
import "./NavBar.scss"

const NavBar = () => {
  return (
    
    <div className="navbar">
        <div className="left-navbar">
            <img src="CoinDCX.png" alt="" />
        </div>
        <div className="right-navbar">
            <div className="r-left-navbar">
             <ul>
                <li>Fertures</li>
                <li>Exchanges</li>
                <li>Hou it Works?</li>
                <li>Blog</li>
                <li>About us</li>
             </ul>
            </div>
            <div className="r-right-navbar">
                <button>Sign In</button>
            </div>
        </div>
    </div>
  )
}

export default NavBar
