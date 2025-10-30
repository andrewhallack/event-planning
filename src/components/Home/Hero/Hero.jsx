import './hero.css'

import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from "framer-motion"
import {  forwardRef, useRef } from "react"

import hero from '../../../assets/Home/hero/hero.png'


const Hero = forwardRef((props, ref) => {

  const imgRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])

  return (
    <section className='hero' ref={ref}>
      <span className='overlay' />
      <div className='hero-img'>
        <motion.img 
          className='main-img' 
          src={hero} 
          style={{ y }}
        />
      </div>
      <h1 className='title'>AUREA</h1>
      <div className='subtitle'>
        <h2><span>Event planing done with </span>taste, care, and character.</h2>
      </div>
    </section>
  )
})

export default Hero