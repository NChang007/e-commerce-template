'use client'
import Image from 'next/image'
import Link from 'next/link'
import ImageLinkCard from './components/ImageLinkCard'
import CarouselCard from './components/CarouselCard'
import Carousel from './components/Carousel'
import { Context } from './context/appContext'
import { useContext } from 'react'

export default function Home() {
  const { store, actions } = useContext(Context)
  console.log(store)
  return (
    <div className='home-container'>
      {/* FIRST SECTION */}
      <section className="home-first-section">
        <ImageLinkCard
          imageSrc={'https://images.pexels.com/photos/15799959/pexels-photo-15799959/free-photo-of-redhead-model-in-summer-dress.jpeg'}
          cardLink={'/'}
          title="Woman's New Releases"
          subTitle="New Summer Atitude"
        />
        <ImageLinkCard 
          imageSrc={'https://images.pexels.com/photos/1484771/pexels-photo-1484771.jpeg'}
          cardLink={'/'}
          title="Men's New Releases"
          subTitle="Adventure Awaits"
        />
      </section>

      {/* SECOND SECTION */}
      <section className="home-second-section">
        <Link href={'/'}><p style={{marginLeft: '10%'}}>BLOOM INTO SPRING: SHOP DRESSES</p></Link>
        <Carousel id={'0'}>
          <CarouselCard id={0}/>
          <CarouselCard id={1}/>
          <CarouselCard id={2}/>
          <CarouselCard id={3}/>
          <CarouselCard id={4}/>
          <CarouselCard id={5}/>
          <CarouselCard id={6}/>
        </Carousel>
      </section>
      
      {/* third section */}
      <section className="home-third-section">
        <ImageLinkCard height={'30rem'}
          imageSrc={'https://images.pexels.com/photos/15799959/pexels-photo-15799959/free-photo-of-redhead-model-in-summer-dress.jpeg'}
          cardLink={'/'}
          title="Woman's New Releases"
          subTitle="New Summer Atitude"
        />
        <ImageLinkCard height={'30rem'}
          imageSrc={'https://images.pexels.com/photos/15799959/pexels-photo-15799959/free-photo-of-redhead-model-in-summer-dress.jpeg'}
          cardLink={'/'}
          title="Woman's New Releases"
          subTitle="New Summer Atitude"
        />
        <ImageLinkCard height={'30rem'}
          imageSrc={'https://images.pexels.com/photos/15799959/pexels-photo-15799959/free-photo-of-redhead-model-in-summer-dress.jpeg'}
          cardLink={'/'}
          title="Woman's New Releases"
          subTitle="New Summer Atitude"
        />
        <ImageLinkCard height={'30rem'}
          imageSrc={'https://images.pexels.com/photos/15799959/pexels-photo-15799959/free-photo-of-redhead-model-in-summer-dress.jpeg'}
          cardLink={'/'}
          title="Woman's New Releases"
          subTitle="New Summer Atitude"
        />
        <ImageLinkCard height={'30rem'}
          imageSrc={'https://images.pexels.com/photos/15799959/pexels-photo-15799959/free-photo-of-redhead-model-in-summer-dress.jpeg'}
          cardLink={'/'}
          title="Woman's New Releases"
          subTitle="New Summer Atitude"
        />
        <ImageLinkCard height={'30rem'}
          imageSrc={'https://images.pexels.com/photos/15799959/pexels-photo-15799959/free-photo-of-redhead-model-in-summer-dress.jpeg'}
          cardLink={'/'}
          title="Woman's New Releases"
          subTitle="New Summer Atitude"
        />
      </section>

      <section className="home-fourth-section">
        <Link className='link-text' href={'/'}><p style={{marginLeft: '10%'}}>BLOOM INTO SPRING: SHOP DRESSES</p></Link>
        <Carousel id={'1'}>
          <CarouselCard id={0}/>
          <CarouselCard id={1}/>
          <CarouselCard id={2}/>
          <CarouselCard id={3}/>
          <CarouselCard id={4}/>
          <CarouselCard id={5}/>
          <CarouselCard id={6}/>
        </Carousel>
      </section>

      <section className="home-fith-section">
        <ImageLinkCard height={'30rem'}
          imageSrc={'https://images.pexels.com/photos/15799959/pexels-photo-15799959/free-photo-of-redhead-model-in-summer-dress.jpeg'}
          cardLink={'/'}
          title="Woman's New Releases"
          subTitle="New Summer Atitude"
        />
        <ImageLinkCard height={'30rem'}
          imageSrc={'https://images.pexels.com/photos/15799959/pexels-photo-15799959/free-photo-of-redhead-model-in-summer-dress.jpeg'}
          cardLink={'/'}
          title="Woman's New Releases"
          subTitle="New Summer Atitude"
        />
      </section>

    </div> 
  )
}
