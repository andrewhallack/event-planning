import './home.css'

import { useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'
import { useNavbar } from '../../hooks/NavbarContext'

import Hero from './Hero/Hero'
import Intro from './Intro/Intro'
import Services from './Services/Services'


const Home = () => {
  const heroRef = useRef(null);
  const introRef = useRef(null);
  const heroIsInView = useInView(heroRef, { margin: '10% 0px 0px 0px' });
  const introIsInView = useInView(introRef, { margin: '0px 0px -90% 0px' });

  const { setIsDark } = useNavbar();

  useEffect(() => {
    if (introIsInView) {
      setIsDark(true);
    } else if (heroIsInView) {
      setIsDark(false);
    }
  
  }, [introIsInView, heroIsInView, setIsDark])

  return (
    <>
      <div className='home'>
        <Hero ref={heroRef} />
        <Intro ref={introRef}/>
        <Services />
      </div>
    </>
  )
}

export default Home