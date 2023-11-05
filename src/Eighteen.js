import React from 'react'
import './styles/Eighteen.css'
import { useState } from 'react';


const Eighteen = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
  return (
    <div>
      <button className='menu-icon' onClick={toggleMenu}>☰</button>
      <ul className={`menu ${isOpen?'open':''}`}>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contacts</li>
      </ul>
    </div>
  )
}

export default Eighteen
