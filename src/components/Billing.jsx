import React from 'react'
import {three } from '../assets'
import styles, { layout } from '../style'

const Billing = () => {
  return (
    <section id='product' className={layout.sectionReverse}>
      <div className={`${layout.sectionImgReverse} `}>
        <img
          src={three}
          alt='billing'
          className='w-[100%] h-[100%] relative z-[5]'
        />
        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>أفضل شركة 
 <br className='sm:block hidden'/>للالمنيوم
الزجاج والستالستيل</h2>
        <p className={`${styles.paragraph} max-w-full mt-5`}>
        أعمال الألمنيوم والاستانلس ستيل، بما في ذلك تصميم وتصنيع الأبواب والنوافذ، وواجهات المباني، والسلالم والدرابزينات، والأبواب والحواجز الزجاجية، والأثاث والتجهيزات الداخلية
        </p>
        <div className='flex flex-row flex-wrap sm:mt-10 mt-6 items-center justify-center w-full'>
      
       <p className='text-primary bg-blue-gradient p-4 rounded-lg'>السعدي للالمنيوم والزجاج والستالستيل</p>
        </div>
      </div>  
    </section>
  )
}

export default Billing
