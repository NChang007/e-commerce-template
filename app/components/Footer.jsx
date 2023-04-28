'use client'
import React from 'react'
import '../styles/footer.css'
import Link from 'next/link'
import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineYoutube } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-content'>
            <div>
                <p className='footer-label'>About The Webster</p>
                <p>Contact</p>
                <p>About</p>
                <p>Founder</p>
                <p>Affiliates</p>
                <p>Careers</p>
            </div>
            <div>
                <p className='footer-label'>About The Stores</p>
                <p>Bal Harbour</p>
                <p>Costa Mesa</p>
                <p>Houston</p>
                <p>Los Angeles</p>
                <p>Miramar</p>
                <p>SoHo</p>
                <p>South Beach</p>
                <p>Toronto</p>
                <p>Palm Beach Pop-Up </p>
            </div>
            <div>
                <p className='footer-label'>Shopping Online</p>
                <p>FAQ</p>
                <p>Return Policy</p>
                <p>Shipping</p>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
                <p>Accessibility Statement</p>
                <p>Contact Digital Stylist</p>
                <p>Loyalty - The Webster Elit</p>
            </div>

            <div>
                <div className="socials-container">
                    <p>SOCIALS</p>
                    <div className="socials">
                        <Link href={'/'}><AiOutlineInstagram/></Link>
                        <Link href={'/'}><AiOutlineTwitter/></Link>
                        <Link href={'/'}><AiOutlineYoutube/></Link>
                    </div>
                </div>
                <div className="mailList-container">
                    <p>Join out mailing List</p>
                    <div>
                        <input type="email" />
                        <button>JOIN</button>
                    </div>
                    <span>By signing up you agree with our <Link href={'/'}>privacy policy</Link> and <Link href={'/'}>terms & conditions</Link>.</span>
                </div>
            </div>
        </div>
        
        <p className='rights-reserved'>© 2023 The TEMPLATE. All Rights Reserved.</p>
    </div>
  )
}

export default Footer