'use client'
import React from 'react'
import '../styles/carousel.css'
import Image from 'next/image'

const CauroselCard = (props) => {
  let parentID = props.carouselID
  let id = props.id
  const cardHover = (id) => {
    let cardText = document.getElementById(`card-text${id}${parentID}`)
    let cardTextHidden = document.getElementById(`card-text-hidden${id}${parentID}`)
    if (cardText.classList.contains('hidden')){
      cardText.classList.remove('hidden')
      cardTextHidden.classList.remove('notHidden')
    }else {
      cardText.classList.add('hidden')
      cardTextHidden.classList.add('notHidden')
    }
  }
  console.log(props.item)
  return (
    <div className="card" onMouseEnter={() => cardHover(id)} onMouseLeave={() => cardHover(id)}>
        <Image 
            className='card-image' 
            src={props.item.image}
            // src={'/images/placeholder_image_01.jpg'}
            // src={'https://images.pexels.com/photos/2235071/pexels-photo-2235071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
            alt='This is a place holder image'
            width={500}
            height={500}
            style={{width:'100%', height:'20em', objectFit:'cover'}}
        />
        <div className="card-text-container">
          <div className="card-text" id={'card-text' + id + parentID}>
              <p className='card-text-label'>{props.item.title.toUpperCase()}</p>
              <p className='card-text-description'>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
              <p className='card-text-price'>{props.item.price}</p>
          </div>
          <div className="card-text-hidden" id={'card-text-hidden' + id + parentID}>
              <p className='card-text-label'>QUICK ADD</p>
              <div className="card-add-options">
                <div className='add-options-item'>XS</div>
                <div className='add-options-item'>S</div>
                <div className='add-options-item'>M</div>
                <div className='add-options-item'>L</div>
                <div className='add-options-item'>XL</div>
                <div className='add-options-item'>XXL</div>
              </div>
              <button className='quickAdd-btn'>ADD TO CART</button>
          </div>
        </div>
    </div>
  )
}

export default CauroselCard