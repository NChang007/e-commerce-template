'use client'
import Image from 'next/image'
import Link from 'next/link'
import PlaceholderImg2 from '../public/images/placeholder_image_02.jpg'
import PlaceholderImg3 from '../public/images/placeholder_image_03.jpg'

export default function Home() {
  return (
    <div className='home-container'>
      {/* FIRST SECTION */}
      <div className="home-first-section">
        <div className='first-section-image-container'>
          <Link href={'/'}>
            <Image className='first-section-image' src={PlaceholderImg2} alt="Placeholder image" />
          </Link>
          <div className='first-section-image-text'>
            <Link href={'/'}>
              <p>WOMEN'S NEW ARRIVALS</p>
            </Link>
            <Link href={'/'}>
              <p>NEW SPRING ATTITUDE</p>
            </Link>
          </div>
        </div>
        <div className='first-section-image-container'>
          <Link href={'/'}>
            <Image className='first-section-image' src={PlaceholderImg3} alt="Placeholder image" />
          </Link>
          <div className='first-section-image-text'>
            <Link href={'/'}>
              <p>MEN'S NEW ARRIVALS</p>
            </Link>
            <Link href={'/'}>
              <p>NEW SPRING ATTITUDE</p>
            </Link>
          </div>
        </div>
      </div>

      {/* SECOND SECTION */}
      <div className="home-second-section">
        <Link href={'/'}><p>BLOOM INTO SPRING: SHOP DRESSES</p></Link>
        <div className='card-display'>
          <div className="card">
            <Image 
              className='card-image' 
              src={'https://images.pexels.com/photos/2235071/pexels-photo-2235071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
              alt='This is a place holder image'
              width={500}
              height={500}
              style={{width:'100%', height:'17em', objectFit:'cover'}}
            />
          </div>
        </div>
      </div>


    </div>
  )
}
