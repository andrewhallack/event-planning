import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import { NavbarProvider } from './hooks/NavbarContext'

import Navbar from "./components/Navbar/Navbar"
import Home from './components/Home/Home'

function App() {
  return (
    <Router>
      <NavbarProvider>      
        <Navbar />
        <Routes>
          <Route exact path='/' element=<Home /> />
        </Routes>
      </NavbarProvider>
    </Router>
  )
}

export default App
