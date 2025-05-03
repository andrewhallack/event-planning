import './intro.css'

import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import img from '../../../assets/table.jpg'

const Intro = () => {
  const introRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: introRef,
    offset: ["start 0.4", "end end"]
  })

  const text = `Non Lorem labore elit sit anim ea consectetur 
                laborum nisi minim amet minim sint officia. 
                Laborum labore nulla consequat mollit laboris 
                sit excepteur ullamco duis minim consectetur. 
                Deserunt velit qui officia voluptate qui consectetur 
                ad pariatur id nisi proident consequat minim.`
                .replace(/\s+/g, ' ')

  return (
    <section className='intro' ref={introRef}>
        
    </section>
  )
}

export default Intro
