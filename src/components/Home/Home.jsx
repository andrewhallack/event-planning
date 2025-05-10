import './home.css'

import Hero from './Hero/Hero'
import Intro from './Intro/Intro'
import Services from './Services/Services'


const Home = () => {
  return (
    <>
      <div className='home'>
        <Hero />
        <Intro />
        <Services />
      </div>
    </>
  )
}

export default Home