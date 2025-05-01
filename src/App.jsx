import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Navbar from "./components/Navbar/Navbar"
import Home from './components/Home/Home'
import { ReactLenis } from 'lenis/react'

function App() {
  
  return (
    <ReactLenis root options={{ lerp: 0.2, easing: t => t }}>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element=<Home /> />
        </Routes>
      </Router>
    </ReactLenis>
  )
}

export default App
