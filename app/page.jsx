import Image from 'next/image'
import styles from './page.module.css'
import placeholderImg1 from './images/placeholder_image_01.jpg'

export default function Home() {
  return (
    <div className='home-container'>
      <img src={placeholderImg1} alt="Placeholder image" />
    </div>
  )
}
