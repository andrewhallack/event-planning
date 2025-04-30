import './intro.css'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
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
                ad pariatur id nisi proident consequat minim. 
                Exercitation et do laboris culpa nostrud amet 
                officia dolor ut exercitation dolore minim.`
                .replace(/\s+/g, ' ')

  return (
    <section className='intro' ref={introRef}>
      <div className='content'>
        <div className='left'>
          <div className='image-wrapper'>
            <img src={img} />
          </div>
        </div>
        <div className='right'>
          <h2>THIS IS A TITLE</h2>
          <p>{text}</p>
        </div>
      </div>

    {/* <h3>
        {(() => {
          let globalIndex = 0
          let start = 0
          let end = 0

          return text.split(' ').map((word, wordIndex) => (
            <span key={wordIndex}>
              {word.split('').map((letter, letterIndex) => {
                const spread = 0.2
                start = (globalIndex / text.length) * (1 - spread)
                end = (start + spread)

                const element = (
                  <Letter key={`${wordIndex}-${letterIndex}`} range={[start, end]} progress={scrollYProgress}>
                    {letter}
                  </Letter>
                )

                globalIndex++
                return element
              })}
              <Letter key={globalIndex} range={[start, end]} progress={scrollYProgress}>
                {'\u00A0'}
              </Letter>
            </span>
          ))
        })()}
      </h3> */}
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
