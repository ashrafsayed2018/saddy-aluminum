import React from 'react'
import Button from './Button'
import { four } from '../assets'
import styles, { layout } from '../style'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}> حان الوقت 
 <br className='sm:block hidden'/> لإعادة التفكير   في اختياراتك</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        شركة السعدى للألمنيوم والزجاج والاستانلس ستيل تتميز بالخبرة الواسعة، والجودة العالية، والتصميم المبتكر، والالتزام بالوقت المحدد، وخدمة العملاء الممتازة، مما يجعلها خيارًا موثوقًا لتلبية احتياجات العملاء في مجال أعمال الألمنيوم والزجاج والاستانلس ستيل.


        </p>
        <Button styles='mt-10'/>
      </div>
      <div className={layout.sectionImg}>
        <img
          src={four}
          alt='card'
          className='w-[100%] h-[100%]'
        />
      </div>
    </section>
  )
}

export default CardDeal
