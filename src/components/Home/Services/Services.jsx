import './services.css'
import img from '../../../assets/venue.jpg'

import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const Services = () => {
  const imgRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['-30%', '30%'])

  return (
    <>
      <section className='services' ref={imgRef}>
        
      </section>
    </>
  )
}

export default Services