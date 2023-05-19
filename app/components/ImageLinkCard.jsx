'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import PlaceholderImg2 from '../../public/images/placeholder_image_02.jpg'
import '../styles/imageLinkCard.css'

const ImageLinkCard = (props) => {
  return (
    <div className='image-link-container'>
        <Link href={'/'}>
            <Image 
                className='image-link-image' 
                style={{height: `${props.height}`}} 
                src={PlaceholderImg2} 
                alt="Placeholder image" 
            />
        </Link>
        <div className='image-link-text'>
            <Link href={'/'}>
                <p>WOMEN'S NEW ARRIVALS</p>
            </Link>
            <Link href={'/'}>
                <p>NEW SPRING ATTITUDE</p>
            </Link>
        </div>
    </div>
  )
}

export default ImageLinkCard