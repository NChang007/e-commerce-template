import React from 'react'
import Link from 'next/link'


const NavItem = (props) => {
  let myContent
  if( props.type === 'women' ) {
    myContent = <li className="dropdown">
              <p className="dropbtn">{props.type.toUpperCase()}</p>
              <div className="dropdown-content">
                <div className="drop-content-left">
                  <div>
                    <Link href='' className="drop-content-item label" >SHOP</Link>
                    <Link href='' className="drop-content-item" >Vacation</Link>
                    <Link href='' className="drop-content-item" >Party & Evening</Link>
                    <Link href='' className="drop-content-item" >Webster Essentials</Link>
                    <Link href='' className="drop-content-item" >Swim Shop</Link>
                    <Link href='' className="drop-content-item" >Festival Dressing</Link>
                    <Link href='' className="drop-content-item" >Denim On Denim</Link>
                  </div>
                </div>
                <div className="drop-content-mid">
                  <div>
                    <Link href='' className="drop-content-item label" >CLOTHING</Link>
                    <Link href='' className="drop-content-item" >All Clothing</Link>
                    <Link href='' className="drop-content-item" >Swimwear</Link>
                    <Link href='' className="drop-content-item" >Jackets & Coats</Link>
                    <Link href='' className="drop-content-item" >Jeans</Link>
                    <Link href='' className="drop-content-item" >Pants</Link>
                    <Link href='' className="drop-content-item" >Shirts & Tops</Link>
                    <Link href='' className="drop-content-item" >Shorts</Link>
                    <Link href='' className="drop-content-item" >Knitwear</Link>
                    <Link href='' className="drop-content-item" >Leisurewear</Link>
                    <Link href='' className="drop-content-item" >Suits and Blazers</Link>
                  </div>
                  <div>
                    <Link href='' className="drop-content-item label" >SHOES</Link>
                    <Link href='' className="drop-content-item" >All Shoes</Link>
                    <Link href='' className="drop-content-item" >Boots</Link>
                    <Link href='' className="drop-content-item" >Sandals</Link>
                    <Link href='' className="drop-content-item" >Sneakers</Link>
                    <Link href='' className="drop-content-item" >Heels</Link>
                  </div>
                  <div>
                    <Link href='' className="drop-content-item label" >BAGS</Link>
                    <Link href='' className="drop-content-item" >All Bags</Link>
                    <Link href='' className="drop-content-item" >Clutches</Link>
                    <Link href='' className="drop-content-item" >Belt Bags</Link>
                    <Link href='' className="drop-content-item" >Crossbody</Link>
                    <Link href='' className="drop-content-item" >Tote Bags</Link>
                    <Link href='' className="drop-content-item" >Handbags</Link>
                    <Link href='' className="drop-content-item" >Shoulder Bags</Link>
                  </div>
                  <div>
                    <Link href='' className="drop-content-item label" >ACCESSORIES</Link>
                    <Link href='' className="drop-content-item" >All Accessories</Link>
                    <Link href='' className="drop-content-item" >Belts</Link>
                    <Link href='' className="drop-content-item" >Hats & Scarves</Link>
                    <Link href='' className="drop-content-item" >Socks & Tights</Link>
                    <Link href='' className="drop-content-item" >Sunglasses</Link>
                    <Link href='' className="drop-content-item" >Wallets</Link>
                    <Link href='' className="drop-content-item" >More</Link>
                  </div>
                  <div>
                    <Link href='' className="drop-content-item label" >JEWELRY</Link>
                    <Link href='' className="drop-content-item" >All Jewelry</Link>
                    <Link href='' className="drop-content-item" >Bracelets</Link>
                    <Link href='' className="drop-content-item" >Earrings</Link>
                    <Link href='' className="drop-content-item" >Fine Jewelry</Link>
                    <Link href='' className="drop-content-item" >Necklaces</Link>
                    <Link href='' className="drop-content-item" >Rings</Link>
                    <Link href='' className="drop-content-item" >Watches</Link>
                  </div>
                </div>
                <div className="drop-content-right">
                  <img src={'https://images.pexels.com/photos/5761131/pexels-photo-5761131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} alt="Image of a woman" />
                  <Link href='' className="drop-content-item" >NEW ARRIVALS</Link>
                </div>
              </div>
            </li> 
  }else if( props.type === 'men' ) {
    myContent = <li className="dropdown">
              <p className="dropbtn">{props.type.toUpperCase()}</p>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </li>
  }else if( props.type === 'designers' ) {
    myContent = <li className="dropdown">
              <p className="dropbtn">{props.type.toUpperCase()}</p>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </li>
  }else if( props.type === 'beauty' ) {
    myContent = <li className="dropdown">
              <p className="dropbtn">{props.type.toUpperCase()}</p>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </li>
  }else if( props.type === 'home' ) {
    myContent = <li className="dropdown">
              <p className="dropbtn">{props.type.toUpperCase()}</p>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </li>
  }else if( props.type === 'editorial' ) {
    myContent = <li className="dropdown">
              <p className="dropbtn">{props.type.toUpperCase()}</p>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </li>
  }else if( props.type === 'sale' ) {
    myContent = <li className="dropdown">
              <p className="dropbtn">{props.type.toUpperCase()}</p>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </li>
  }else {
    myContent = 'that type does not exist'
  }
  return (
    <>
      {myContent}
    </>
  )
}

export default NavItem