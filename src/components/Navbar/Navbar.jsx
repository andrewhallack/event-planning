import { Link } from 'react-router-dom'
import {  useState } from 'react'
import { RiShoppingBagLine } from "react-icons/ri"
import { 
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaYoutube
} from "react-icons/fa"

import { links } from './links'
import './navbar.css'
import hero from '../../assets/Home/hero/hero.png'


const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(false)
  const [activeBooking, setActiveBooking] = useState(false)

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
          <div className={activeMenu ? 'symbol active' : 'symbol'}>
            <span className='arrow' />
            <RiShoppingBagLine className='icon' />
          </div>
        </button>
        <div className={activeMenu ? 'menu active' : 'menu'}>
          <ul className='menu-items'>
            {Object.entries(links).map(([key, val], i) => {
              return (
                <li key={i} className='menu-item'>
                  <Link className='link' to={key} onClick={() => toggleMenu()}>
                    <div className='link-text-wrapper'>
                      <span className='link-number'>
                        <span className='link-text'>0{i+1}</span>
                        <span className='link-text'>0{i+1}</span>
                      </span>
                    </div>
                    <div className='link-text-wrapper'>
                      <span className='link-name'>
                        <span className='link-text'>{val}</span>
                        <span className='link-text'>{val}</span>
                      </span>
                    </div>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar