import { forwardRef } from 'react';
import './intro.css'

const Intro = forwardRef((props, ref) => {
  return (
    <>
      <section className='intro' ref={ref}>
        <h3>
          Qui mollit elit eu ipsum voluptate sit laborum velit. 
          Fugiat consectetur cillum fugiat consectetur commodo 
          cupidatat velit fugiat ullamco culpa. 
        </h3>
      </section>
    </>
  )
})

export default Intro