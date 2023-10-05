'use client'
import Image from 'next/image'
import Link from 'next/link'
import ImageLinkCard from './components/ImageLinkCard'
import CarouselCard from './components/CarouselCard'
import Carousel from './components/Carousel'
import { Context } from './context/appContext'
import { useContext } from 'react'
import imagePlaceholder from '../public/images/placeholder_image_01.jpg'

export default function Home() {
  const { store, actions } = useContext(Context)

  let womanImagesData = [
    {
      'image':'https://images.pexels.com/photos/15241498/pexels-photo-15241498/free-photo-of-standing-woman-holding-knee.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'title': 'T-Shirt',
      'price': '$350'
    },
    {
      'image':'https://images.pexels.com/photos/15767253/pexels-photo-15767253/free-photo-of-laughing-woman-in-liverpool-tshirt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'title':'T-Shirt',
      'price':'$478'
    },
    {
      'image':'https://images.pexels.com/photos/16601768/pexels-photo-16601768/free-photo-of-woman-in-white-t-shirt-standing-in-an-alley-of-a-medieval-building.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      'title':'Pants',
      'price':'$300'
    },
    {
      'image':'https://images.pexels.com/photos/16948250/pexels-photo-16948250/free-photo-of-woman-posing-in-river.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'title':'Bikini Top',
      'price':'$400'
    },
    {
      'image':'https://images.pexels.com/photos/17005923/pexels-photo-17005923/free-photo-of-light-fashion-love-people.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'title':'Shorts',
      'price':'$278'
    },
    {
      'image':'https://images.pexels.com/photos/15591154/pexels-photo-15591154/free-photo-of-snow-city-fashion-red.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'title':'Jackets',
      'price':'$1260'
    },
    {
      'image':'https://images.pexels.com/photos/17404523/pexels-photo-17404523/free-photo-of-young-woman-wearing-a-denim-jacket-and-orange-sunglasses.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'title':'Jackets',
      'price':'$800'
    },
    {
      'image':'https://images.pexels.com/photos/16734808/pexels-photo-16734808/free-photo-of-wood-landscape-man-person.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'title':'Scarf',
      'price':'$400'
    },

  ]
  let menImageData = [
    {
      'image':'https://images.pexels.com/photos/4890259/pexels-photo-4890259.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'title':'Hats',
      'price':'$699'
    },
    {
      'image':'https://images.pexels.com/photos/5220075/pexels-photo-5220075.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'title':'Rings',
      'price':'$435'
    },
    {
      'image':'https://images.pexels.com/photos/5543385/pexels-photo-5543385.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'title':'Hoodies',
      'price':'$700'
    },
    {
      'image':'https://images.pexels.com/photos/4611700/pexels-photo-4611700.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'title':'Suits',
      'price':'$4000'
    },
    {
      'image':'https://images.pexels.com/photos/7289412/pexels-photo-7289412.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'title':'Active Wear',
      'price':'$130'
    },
    {
      'image':'https://images.pexels.com/photos/5612320/pexels-photo-5612320.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'title':'Coats',
      'price':'$1230'
    },
    {
      'image':'https://images.pexels.com/photos/7925814/pexels-photo-7925814.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'title':'Suits',
      'price':'$3450'
    },
    {
      'image':'https://images.pexels.com/photos/5265000/pexels-photo-5265000.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'title':'Long Coats',
      'price':'$2000'
    },
  ]
  let newStuffData = [
    {
      'image': 'https://images.pexels.com/photos/17281224/pexels-photo-17281224/free-photo-of-young-man-in-hoodie-posing-in-nature.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
      'title': 'New Mens Hoodies',
      'for':'Men'
    },
    {
      'image':'https://images.pexels.com/photos/16443041/pexels-photo-16443041/free-photo-of-blonde-woman-posing-on-armchair.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
      'title': 'New Womans Casuals',
      'for': 'Woman'
    },
    {
      'image': 'https://images.pexels.com/photos/11215086/pexels-photo-11215086.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
      'title': 'New Mens Pants',
      'for': 'Men'
    },
    {
      'image': 'https://images.pexels.com/photos/17418698/pexels-photo-17418698/free-photo-of-black-and-white-portrait.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
      'title': 'Home Casuals',
      'for': 'Woman'
    },
    {
      'image': 'https://images.pexels.com/photos/17504536/pexels-photo-17504536.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
      'title': 'Womans New Leather Wear',
      'for': 'Woman'
    },
    {
      'image': 'https://images.pexels.com/photos/17412689/pexels-photo-17412689/free-photo-of-man-walking-and-posing-at-night.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
      'title': 'Mens Pants',
      'for': 'Men'
    },
    {
      'image': 'https://images.pexels.com/photos/17437252/pexels-photo-17437252/free-photo-of-wood-fashion-people-woman.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
      'title': 'New Incoming Overalls',
      'for': 'Woman'
    },
    {
      'image': 'https://images.pexels.com/photos/16983235/pexels-photo-16983235/free-photo-of-people-woman-girl-animal.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
      'title': 'Summer Wear',
      'for': 'Woman'
    },
    {
      'image': 'https://images.pexels.com/photos/17552526/pexels-photo-17552526/free-photo-of-city-road-man-person.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
      'title': 'Mens Jeans',
      'for': 'Men'
    }
  ]
  let specialsData =[
    {
      'image': 'https://images.pexels.com/photos/17464926/pexels-photo-17464926/free-photo-of-a-woman-wearing-orange-dress-on-a-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'title': 'Sun Dress',
      'for':'Woman'
    },
    {
      'image':'https://images.pexels.com/photos/4731911/pexels-photo-4731911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'title':'White Dress',
      'for': 'Woman'
    },
    {
      'image':'https://images.pexels.com/photos/12222912/pexels-photo-12222912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'title': 'Shirts',
      'for':'Woman'
    },
    {
      'image':'https://images.pexels.com/photos/15133972/pexels-photo-15133972.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
      'title':'White Dress',
      'for':'Woman'
    }
  ]

  console.log(store)
  return (
    <div className='home-container'>
      {/* FIRST SECTION */}
      <section className="home-first-section">
        <ImageLinkCard
          // flexGrow={'1'}
          height={'50rem'}
          imageSrc={'https://images.pexels.com/photos/1550913/pexels-photo-1550913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
          cardLink={'/'}
          title="Woman's New Releases"
          subTitle="New Summer Atitude"
        />
        <ImageLinkCard 
          // flexGrow={'1'}
          height={'50rem'}
          imageSrc={'https://images.pexels.com/photos/1098365/pexels-photo-1098365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
          cardLink={'/'}
          title="Men's New Releases"
          subTitle="Adventure Awaits"
        />
      </section>

      {/* SECOND SECTION */}
      <section className="home-second-section">
        <Link href={'/'}><p style={{marginLeft: '10%'}}>BLOOM INTO SPRING: SHOP </p></Link>
        <Carousel id={'0'}>
          {womanImagesData.map((item,idx) => {
            return (
              <CarouselCard key={idx} carouselID={'0'} id={idx} item={item} />
            )
          })}
        </Carousel>
      </section>
      
      {/* third section */}
      <section className="home-third-section">
        {newStuffData.map((item, idx) => {
          return (
            <ImageLinkCard 
              flexGrow={'0'}
              height={'40rem'}
              key={idx}
              imageSrc={item.image}
              cardLink={'/'}
              title={item.for + 'New Releases'}
              subTitle={item.title}
            />
          )
        })}
        
      </section>

      <section className="home-fourth-section">
        <Link className='link-text' href={'/'}><p style={{marginLeft: '10%'}}>BLOOM INTO SPRING: SHOP DRESSES</p></Link>
        <Carousel id={'1'}>
          {menImageData.map((item,idx) => {
            return (
              <CarouselCard key={idx} carouselID={'1'} id={idx} item={item} />
            )
          })}
        </Carousel>
      </section>

      <section className="home-fith-section">
        {specialsData.map((item,idx) => {
          return (
            <ImageLinkCard 
              flexGrow={'0'}
              height={'40rem'}
              imageSrc={item.image}
              cardLink={'/'}
              title={item.for + 's Sales'}
              subTitle={item.title}
            />
          )
        })}
        {/* <ImageLinkCard 
          flexGrow={'0'}
          height={'30rem'}
          imageSrc={'https://images.pexels.com/photos/15799959/pexels-photo-15799959/free-photo-of-redhead-model-in-summer-dress.jpeg'}
          cardLink={'/'}
          title="Woman's New Releases"
          subTitle="New Summer Atitude"
        />
        <ImageLinkCard 
          flexGrow={'0'}
          height={'30rem'}
          imageSrc={'https://images.pexels.com/photos/15799959/pexels-photo-15799959/free-photo-of-redhead-model-in-summer-dress.jpeg'}
          cardLink={'/'}
          title="Woman's New Releases"
          subTitle="New Summer Atitude"
        /> */}
      </section>

    </div> 
  )
}
