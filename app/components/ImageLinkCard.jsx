'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import PlaceholderImg2 from '../../public/images/placeholder_image_02.jpg'
import '../styles/imageLinkCard.css'

const ImageLinkCard = (props) => {
  return (
    <div className='image-link-container' style={{flexGrow: `${props.flexGrow}`}} >
        <Link href={props.cardLink}>
            <Image 
                className='image-link-image' 
                style={{height: `${props.height}`}} 
                width='500'
                height='500'
                src={props.imageSrc} 
                alt="Placeholder image" 
            />
        </Link>
        <div className='image-link-text'>
            <Link href={props.cardLink}>
                <p>{props.title.toUpperCase()}</p>
            </Link>
            <Link href={props.cardLink}>
                <p>{props.subTitle.toUpperCase()}</p>
            </Link>
        </div>
    </div>
  )
}

export default ImageLinkCard