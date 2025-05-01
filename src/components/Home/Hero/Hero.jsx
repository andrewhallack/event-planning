import './hero.css'
import img from '../../../assets/hero.jpg'

import { Link } from 'react-router-dom'
import { GoCalendar } from "react-icons/go";
import { motion, useScroll, useTransform } from "framer-motion"
import {  forwardRef, useRef } from "react"

const Hero = forwardRef((props, ref) => {

  const imgRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['-30%', '30%'])

  return (
    <>
      <section className='hero' ref={ref}>
        <div className='bg-img-wrapper' ref={imgRef}>
          <div className='overlay' />
          <motion.img 
            style={{ y }}
            src={img} />
        </div>
        <div className='content'>
            <div className='title'>
                <h1>AUREA</h1>
                <p>Quis sint esse non mollit ullamco.</p>
                <Link to='/book' className="button filled light">
                  <span className='text'>BOOK NOW<br />BOOK NOW</span>
                  <span className='arrow-circle'>
                    <span className='arrow-container'>
                      <GoCalendar style={{ fontSize: 24 }} />
                    </span>
                    <span className='arrow-container'>
                      <GoCalendar style={{ fontSize: 24 }} />
                    </span>
                  </span>
                </Link>
            </div>
        </div>
      </section>
    </>
  )
})

export default Hero