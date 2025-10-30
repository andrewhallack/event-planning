import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { RiShoppingBagLine } from "react-icons/ri"

import { links } from './links'
import './navbar.css'


const Navbar = () => {
  const location = useLocation()
  const [curPage, setCurPage] = useState(window.location.pathname)
  const [activeMenu, setActiveMenu] = useState(false)
  const [activeBooking, setActiveBooking] = useState(false)

  useEffect(() => {
      setCurPage(location.pathname)
  }, [location])

  const toggleMenu = () => {
    setActiveMenu(!activeMenu)
  }
  
  const toggleBooking = () => {
    setActiveBooking(!activeBooking)
  }

  return (
    <header className='navbar'>
      <nav className='nav'>
        <button 
          className='menu-button' 
          onClick={() => toggleMenu()}
        >
          <div className={activeMenu ? 'symbol active' : 'symbol'}>
            <span className='hamburger'/>
            <span className='close'/>
          </div>
          <div className={activeMenu ? 'button-text-wrapper slide-up' : 'button-text-wrapper'}>
            <span className='button-text'>MENU</span>
            <span className='button-text'>CLOSE</span>
          </div>
        </button>
        <Link to='/'>
          <span className='logo'>AUREA</span>
        </Link>
        <button 
          className='book-button'
          onClick={() => toggleBooking()}
        >
          <div className={activeBooking ? 'button-text-wrapper slide-up' : 'button-text-wrapper'}>
            <span className='button-text'>BOOKING</span>
            <span className='button-text'>CLOSE</span>
          </div>
          <span className='arrow' />
          <RiShoppingBagLine className='icon' />
        </button>
      </nav>
    </header>
  )
}

export default Navbar