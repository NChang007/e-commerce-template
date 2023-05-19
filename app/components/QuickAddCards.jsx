import React from 'react'
import Image from 'next/image'
import '../styles/QuickAddCards.css'

const QuickAddCards = (props) => {
    let id = props.id
    const cardHover = (id) => {
        let cardText = document.getElementById(`card-text${id}`)
        let cardTextHidden = document.getElementById(`card-text-hidden${id}`)
        if (cardText.classList.contains('hidden')){
          cardText.classList.remove('hidden')
          cardTextHidden.classList.remove('notHidden')
        }else {
          cardText.classList.add('hidden')
          cardTextHidden.classList.add('notHidden')
        }
    }
  return (
    <div className="card" onMouseEnter={() => cardHover(id)} onMouseLeave={() => cardHover(id)}>
        <Image 
            className='card-image' 
            // src={'/images/placeholder_image_01.jpg'}
            src={'https://images.pexels.com/photos/2235071/pexels-photo-2235071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
            alt='This is a place holder image'
            width={500}
            height={500}
            style={{width:'100%', height:'20em', objectFit:'cover'}}
        />
        <div className="card-text-container">
          <div className="card-text" id={'card-text' + id}>
              <p className='card-text-label'>DRESS</p>
              <p className='card-text-description'>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
              <p className='card-text-price'>$1,035</p>
          </div>
          <div className="card-text-hidden" id={'card-text-hidden' + id}>
              <p className='card-text-label'>QUICK ADD</p>
              <div className="card-add-options">
                <div className='add-options-item'>FR32</div>
                <div className='add-options-item'>FR34</div>
                <div className='add-options-item'>FR36</div>
                <div className='add-options-item'>FR38</div>
                <div className='add-options-item'>FR40</div>
                <div className='add-options-item'>FR42</div>
                <div className='add-options-item'>FR44</div>
                <div className='add-options-item'>FR46</div>
                <div className='add-options-item'>FR48</div>
              </div>
              <button className='qac-btn'>ADD TO CART</button>
              <p className='card-text-hidden-price'>$1,035</p>
          </div>
        </div>
    </div>
  )
}

export default QuickAddCards