import React from 'react'
import { 
  Billing, 
  Business, 
  CardDeal, 
  Clients, 
  CTA, 
  Footer, 
  Hero, 
  Navbar, 
  Stats, 
  Testimonials 
} from './components'
import image1 from './assets/001.jpeg';
import image2 from './assets/002.jpeg';
import image3 from './assets/003.jpeg';
import image4 from './assets/004.jpeg';
import image5 from './assets/005.jpeg';
import image6 from './assets/006.jpeg';
import image7 from './assets/007.jpeg';
import image8 from './assets/008.jpeg';
import image9 from './assets/009.jpeg';
import image10 from './assets/010.jpeg';
import styles from './style'
import { AddressMap } from './components/googleMap'
import Gallery from './components/Gallery'

const App = () => {
   const images = [
    { id: 1, src: image1, alt: 'Image 1' },
    { id: 2, src: image2, alt: 'Image 2' },
    { id: 3, src: image3, alt: 'Image 3' },
    { id: 4, src: image4, alt: 'Image 4' },
    { id: 5, src: image5, alt: 'Image 5' },
    { id: 6, src: image6, alt: 'Image 6' },
    { id: 7, src: image7, alt: 'Image 7' },
    { id: 8, src: image8, alt: 'Image 8' },
    { id: 9, src: image9, alt: 'Image 9' },
    { id: 10, src: image10, alt: 'Image 10' },
    // Add more images as needed
  ];
  return (
    <div className='bg-primary w-full overflow-hidden' dir='rtl'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>      
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          {/* <Stats/> */}
          <Business/>
          <Billing/>
          <CardDeal/>
          <Gallery images={images}/>
          {/* <Testimonials/> */}
          {/* <Clients/> */}
          <CTA/>
          <AddressMap/>
          <Footer/>     
        </div>
      </div>
    </div>
  )
}

export default App