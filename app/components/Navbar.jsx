'use client'
import React from 'react'
import Link from 'next/link'
import NavItem from './NavItem'
import LogReg from './LogReg'
import Search from './Search'
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const handleOpenNav = (e) => {
    e.preventDefault()
    document.querySelector('.nav-navigation-wrapper').classList.toggle('d-flex')
    // console.log(document.querySelector('.nav-navigation-wrapper').classList.toggle('d-flex'));
  }

  return (
    <nav className='navbar'>
        <div className='navbar-left'>
            <Link href={'/'} className='nav-logo' >TEMPLATE</Link>  
            <div className='nav-navigation-wrapper'>
              <ul className='nav-navigation'>
                  <NavItem  type={'women'} />
                  <NavItem  type={'men'} />
                  <NavItem  type={'designers'} />
                  <NavItem  type={'beauty'} />
                  <NavItem  type={'home'} />
                  <NavItem  type={'editorial'} />
                  <NavItem  type={'sale'} id='nav-sales-tab' />
              </ul>
            </div>
        </div> 
        <div className="nav-right">
            {/* login/register */}
            <LogReg/>
            {/* search component */}
            <Search/>
            {/* cart */}
        </div>
        <div className='navigation-control'>
          <button 
            className='btn'
            onClick={handleOpenNav}
          >
            <RxHamburgerMenu/>
          </button>
        </div>     
    </nav>
  )
}

export default Navbar