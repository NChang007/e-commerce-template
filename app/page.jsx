'use client'
import Image from 'next/image'
import Link from 'next/link'
import ImageLinkCard from './components/ImageLinkCard'
import CarouselCard from './components/CarouselCard'
import Carousel from './components/Carousel'

export default function Home() {

  return (
    <div className='home-container'>
      {/* FIRST SECTION */}
      <div className="home-first-section">
        <ImageLinkCard/>
        <ImageLinkCard/>
      </div>

      {/* SECOND SECTION */}
      <div className="home-second-section">
        <Link href={'/'}><p>BLOOM INTO SPRING: SHOP DRESSES</p></Link>
        <Carousel id={'0'}>
          <CarouselCard id={0}/>
          <CarouselCard id={1}/>
          <CarouselCard id={2}/>
          <CarouselCard id={3}/>
          <CarouselCard id={4}/>
          <CarouselCard id={5}/>
          <CarouselCard id={6}/>
        </Carousel>
      </div>
      
      {/* third section */}
      <div className="home-third-section">
        <ImageLinkCard height={'30rem'}/>
        <ImageLinkCard height={'30rem'}/>
        <ImageLinkCard height={'30rem'}/>
        <ImageLinkCard height={'30rem'}/>
        <ImageLinkCard height={'30rem'}/>
        <ImageLinkCard height={'30rem'}/>
      </div>

      <div className="home-fourth-section">
        <Link href={'/'}><p>BLOOM INTO SPRING: SHOP DRESSES</p></Link>
        <Carousel id={'1'}>
          <CarouselCard id={0}/>
          <CarouselCard id={1}/>
          <CarouselCard id={2}/>
          <CarouselCard id={3}/>
          <CarouselCard id={4}/>
          <CarouselCard id={5}/>
          <CarouselCard id={6}/>
        </Carousel>
      </div>

      <div className="home-fith-section">
        <ImageLinkCard />
        <ImageLinkCard />
      </div>

    </div> 
  )
}
