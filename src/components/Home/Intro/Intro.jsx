import './intro.css'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

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
                ad pariatur id nisi proident consequat minim. 
                Exercitation et do laboris culpa nostrud amet 
                officia dolor ut exercitation dolore minim.`
                .replace(/\s+/g, ' ')

  return (
    <section className='intro' ref={introRef}>
      <p>{text}</p>
    </section>
  )
}

export default Intro

const Letter = ({ children, range, progress }) => {
  const fadeIn = useTransform(progress, range, [0, 1])

  const opacity = useTransform(fadeIn, range, [0, 1])
  const y = useTransform(fadeIn, range, [0, 16])

  return (
    <motion.span
      style={{
        opacity,
        y,
      }}
    >
      {children}
    </motion.span>
  )
}
