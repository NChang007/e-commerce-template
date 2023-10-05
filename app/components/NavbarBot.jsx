import React from 'react'
import '../styles/navbarbot.css'
import LogReg from './LogReg'
import Search from './Search'
import { AiOutlineHome } from "react-icons/ai";

const NavbarBot = () => {
  return (
    <nav className='navbarBot'>
        <LogReg/>
        <a href="#" className='homebtn'>
            <AiOutlineHome/>
        </a>
        <Search/>
    </nav>
  )
}

export default NavbarBot