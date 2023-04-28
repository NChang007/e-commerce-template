'use client'
import React from 'react'
import '../styles/carousel.css'
import CarouselCard from './CarouselCard'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

const Carousel = (props) => {
  console.log(props)
  let id = props.id
  const scrollLeft = (id) => {
    document.getElementById(`carousel-content${id}`).scrollLeft -= 220;
  }
  const scrollRight = (id) => {
    document.getElementById(`carousel-content${id}`).scrollLeft += 220;
  }
  
  return (
    <div className='carousel-container'>
        <div id={'carousel-content' + id}className="carousel-content">
          {props.children}
        </div>
        <div className="carousel-left-btn" onClick={()=> scrollLeft(id)}><span><AiOutlineArrowLeft/></span></div>
        <div className="carousel-right-btn" onClick={()=> scrollRight(id)}><span><AiOutlineArrowRight/></span></div>
    </div>
  )
}

export default Carousel