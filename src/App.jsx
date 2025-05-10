import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Navbar2 from "./components/Navbar/Navbar2"
import Home from './components/Home/Home'
import { ReactLenis } from 'lenis/react'

function App() {
  
  return (
    <ReactLenis root options={{ lerp: 0.1, easing: t => t }}>
      <Router>
        <Navbar2 />
        <Routes>
          <Route exact path='/' element=<Home /> />
        </Routes>
      </Router>
    </ReactLenis>
  )
}

export default App
