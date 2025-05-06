import './intro.css'

import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import { Link } from 'react-router-dom'

import { TfiArrowRight } from "react-icons/tfi";

import img from '../../../assets/venue2.jpg'
import img2 from '../../../assets/venue3.jpg'


const Intro = () => {
  const introRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: introRef,
    offset: ["start 0.4", "end end"]
  })

  const text = `Non Lorem labore elit sit anim ea consectetur 
                laborum nisi minim amet minim sint officia. 
                Laborum labore nulla consequat mollit laboris 
                sit excepteur ullamco duis minim consectetur.`
                .replace(/\s+/g, ' ')

  return (
    <section className='intro' ref={introRef}>
        <div className='top'>
          <p>{text}</p>
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
        <div className='images'>
          <div className='left'>
            <img src={img} />
          </div>
          <div className='right'>
            <img src={img2} />
          </div>
        </div>
        <div className='bottom'>
          <p>
            Irure in culpa laboris ex dolor enim tempor. Cupidatat officia nisi sint aute ullamco culpa ut dolor aute elit ex aute esse nisi.
          </p>
        </div>
    </section>
  )
}

export default Intro
