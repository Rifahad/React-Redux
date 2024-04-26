import React from 'react'
import './Header.css'
import { FaShoppingCart } from "react-icons/fa";

function Header() {
  return (
    <header>
        <div className='container'>
            <h1>Rt-max</h1>
            <FaShoppingCart className='icon'/>
        </div>
    </header>
  )
}

export default Header
