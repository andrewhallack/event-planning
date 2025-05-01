import './home.css'

import { useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'
import { useNavbar } from '../../hooks/NavbarContext'

import Hero from './Hero/Hero'
import Intro from './Intro/Intro'


const Home = () => {
  const heroRef = useRef(null);
  const heroIsInView = useInView(heroRef, { margin: '-10% 0px 0px 0px' });

  const { setIsDark } = useNavbar();

  useEffect(() => {
    setIsDark(!heroIsInView)  
  }, [heroIsInView, setIsDark])

  return (
    <>
      <div className='home'>
        <Hero ref={heroRef} />
        {/* <Intro /> */}
      </div>
    </>
  )
}

export default Home