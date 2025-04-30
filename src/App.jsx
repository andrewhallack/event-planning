import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import { NavbarProvider } from './hooks/NavbarContext'

import Navbar from "./components/Navbar/Navbar"
import Home from './components/Home/Home'
import { ReactLenis } from 'lenis/react'

function App() {
  
  return (
    <ReactLenis root options={{ lerp: 0.2, easing: t => t }}>
      <Router>
        <NavbarProvider> 
          <Navbar />
          <Routes>
            <Route exact path='/' element=<Home /> />
          </Routes>
        </NavbarProvider>
      </Router>
    </ReactLenis>
  )
}

export default App
