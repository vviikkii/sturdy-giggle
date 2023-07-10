import React from 'react'
import styles from './page.module.css'
import Button from '@/components/Button/Button'
import Image from 'next/image'

export const metadata = {
  title: 'About',
  description: 'This is the About page',
}

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image 
        src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
         fill={true}
         alt=""
         className={styles.img}
         />
         <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>Handcrafting award winning digital experiences</h2>
         </div>
      </div>
      <div className={styles.textContainer}>
      <div className={styles.item}>
        <h1 className={styles.title}>Who Are We?</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus odio at viverra consectetur. Proin sollicitudin, ex non maximus viverra, nibh erat molestie ex, ac sagittis lorem eros in augue. Mauris eget neque sit amet lacus pellentesque sagittis. Sed ultrices ex sed urna malesuada, et pharetra nisi condimentum. Cras sapien massa, tincidunt non enim et, ornare vehicula mi. Morbi malesuada, nibh in pellentesque sodales, orci lectus 
          <br />
          <br />
          rutrum augue, vel pharetra ex augue pulvinar metus. Curabitur lobortis lorem sem, ut dictum sem rhoncus ac. Pellentesque id orci vel elit volutpat consectetur. Praesent faucibus lacus volutpat blandit ornare. Nam in mi magna. Phasellus accumsan pharetra varius. Morbi ante eros, malesuada quis libero ut, sollicitudin ultrices ligula. Etiam a varius dui.
         <br />
         <br />
         Cras varius, purus ut aliquet ultrices, mauris risus blandit purus, sit amet ultrices eros magna eu risus. Integer dignissim metus vitae volutpat.
        </p>
        <br />
         <br />
      </div>
      <div className={styles.item} alt="">
        <h1 className={styles.title}>What We Do?</h1>
        <p className={styles.desc}>
          rutrum augue, vel pharetra ex augue pulvinar vel elit volutpat consectetur. Praesent faucibus lacus volutpat blandit ornare. Nam in mi magna. Phasellus accumsan pharetra varius. Morbi ante eros, malesuada quis libero ut, sollicitudin ultrices ligula. Etiam a varius dui.
         <br></br>
         Cras varius, purus ut aliquet ultrices, mauris risus blandit purus, sit amet ultrices eros magna eu risus. Integer dignissim metus vitae volutpat.
         <br/>
         <br/> - Dynamic Websites
         <br/>
         <br/> - Fast and Handy 
         <br/>
         <br/> - Mobile Apps
        </p>
        <Button url="/contact" text="Contact"/>
      </div>
     </div>
    </div>
  )
}

export default About
