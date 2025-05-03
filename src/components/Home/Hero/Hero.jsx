import './hero.css'
import img from '../../../assets/venue.jpg'

import { Link } from 'react-router-dom'
import { TfiArrowRight } from "react-icons/tfi";
import { motion, useScroll, useTransform } from "framer-motion"
import {  forwardRef, useRef } from "react"

import { 
  FaFacebook,
  FaInstagram,
  FaYoutube
} from "react-icons/fa6";


const Hero = forwardRef((props, ref) => {

  // const imgRef = useRef(null)
  // const { scrollYProgress } = useScroll({
  //   target: imgRef,
  //   offset: ['start end', 'end start']
  // })

  // const y = useTransform(scrollYProgress, [0, 1], ['-30%', '30%'])

  return (
    <section className='hero'>
      <div className="hero-image-wrapper">
        <motion.img 
          src={img} 
          // style={{ y }}
        />
        <div className="overlay" />
        <div className='bottom'>
          <div className='socials'>
            <FaFacebook className='social-icon' />
            <FaYoutube className='social-icon' />
            <FaInstagram className='social-icon' />
          </div>
          {/* <div className='contact'>
            <Link to='/contact' className='contact'>
              Contact
            </Link>
          </div> */}
        </div>
      </div>
      <div className="title">
        <h1>AUREA</h1>
        <p>This is an event planning company.</p>
      </div>
    </section>
  )
})

export default Hero