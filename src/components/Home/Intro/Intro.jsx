import './intro.css'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'

import { TfiArrowRight } from "react-icons/tfi";

import img from '../../../assets/venue2.jpg'
import img2 from '../../../assets/venue3.jpg'


const Intro = () => {
  const textRef = useRef(null)
  const imgRef = useRef(null)

  const { scrollYProgress: textAnimation } = useScroll({
    target: textRef,
    offset: ["start 0.8", "start start"]
  })
  
  const { scrollYProgress: imgAnimation } = useScroll({
    target: imgRef,
    offset: ["start end", "end center"]
  })

  const text = `This should be a profound sentence to make us look
                cool. That way customers think we believe in something
                so they use our services.`
                .replace(/\s+/g, ' ')

  const scaleY = useTransform(textAnimation, [0, 1], [1, 0])
  const moveDown = useTransform(imgAnimation, [0, 1], [-100, 100]) 
  const moveUp = useTransform(imgAnimation, [1, 0], [-100, 100]) 

  return (
    <section className='intro'>
        <div className='top'>
          <p ref={textRef}>
            {text}
            <motion.span 
              className='text-overlay' 
              style={{ scaleY }}  
            />
          </p>
          <Link className='button2'>
            <span className='button-content-wrapper'>
              <span className='button-icon-wrapper'>
                <span className='button-icon'>
                  <TfiArrowRight />
                </span>
              </span>
              <span className='button-content'>
                More about us.
              </span>
            </span>
          </Link>
        </div>
        <div className='moving-images' ref={imgRef}>
          <div className='left'>
            <motion.img 
              src={img} 
              style={{ y: moveDown }}
              />
          </div>
          <div className='right'>
          <motion.img 
              src={img2} 
              style={{ y: moveUp }}
              />
          </div>
        </div>
        <div className='image'>
          <img src={img} />
        </div>
    </section>
  )
}

export default Intro
