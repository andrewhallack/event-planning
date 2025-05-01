import './home.css'

import Hero from './Hero/Hero'
import Intro from './Intro/Intro'


const Home = () => {
  return (
    <>
      <div className='home'>
        <Hero />
        <Intro />
      </div>
    </>
  )
}

export default Home