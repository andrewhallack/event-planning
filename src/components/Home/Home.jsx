import './home.css'

import { useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

import Hero from './Hero/Hero'
import Intro from './Intro/Intro'


const Home = () => {
  const heroRef = useRef(null);

  return (
    <>
      <div className='home'>
        <Hero ref={heroRef} />
        <Intro />
      </div>
    </>
  )
}

export default Home