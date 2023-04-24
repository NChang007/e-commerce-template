import React from 'react'
import Link from 'next/link'
import NavItem from './NavItem'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='navbar-left'>
            <Link href={'/'} className='nav-logo' >SOME-LOGO</Link>  
            <ul className='nav-navigation'>
                <NavItem  type={'women'} />
                <NavItem  type={'men'} />
                <NavItem  type={'designers'} />
                <NavItem  type={'beauty'} />
                <NavItem  type={'home'} />
                <NavItem  type={'editorial'} />
                <NavItem  type={'sale'} />
            </ul>
        </div> 
        <div className="nav-right">
            {/* login/register */}

            {/* search component */}

            {/* cart */}
        </div>      
    </nav>
  )
}

export default Navbar