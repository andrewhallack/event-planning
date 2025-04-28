import { useEffect, useState } from 'react'
import { Link, useLocation } from "react-router-dom";

import './navbar.css'

import { 
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTiktok
} from "react-icons/fa6";
import { IoLogoXing } from "react-icons/io";
import { useNavbar } from '../../hooks/NavbarContext';



const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const location = useLocation()
    const [curPage, setCurPage] = useState(window.location.pathname)
    const { isDark } = useNavbar()

    const handleMenu = () => {
        setOpenMenu(!openMenu)
    }

    const closeMenu = () => {
        setOpenMenu(false)
    }

    useEffect(() => {
        setCurPage(location.pathname)
    }, [location])

    let date = new Date()
    let year = date.getFullYear()

    return (
        <header className='navbar'>
            <nav className='desktop'>
                <Link 
                    className={isDark ? 'logo dark' : 'logo'} 
                    to='/'>
                        <IoLogoXing />
                </Link>
                <div className='menu'>
                    <ul className={isDark ? 'dark' : ''}>
                        <li className={curPage === '/' ? 'selected' : ''}>
                            <Link to='/'>HOME</Link>
                        </li>
                        <li className={curPage === '/dinner-parties' ? 'selected' : ''}>
                            <Link to='/dinner-parties'>DINNER PARTIES</Link>
                        </li>
                        <li className={curPage === '/proposals' ? 'selected' : ''}>
                            <Link to='/proposals'>PROPOSALS</Link>
                        </li>
                        <li className={curPage === '/luxury-events' ? 'selected' : ''}>
                            <Link to='/luxury-events'>LUXURY EVENTS</Link>
                        </li>
                        <li className={curPage === '/add-ons' ? 'selected' : ''}>
                            <Link to='/add-ons'>ADD-ONS</Link>
                        </li>
                        <li className={curPage === '/about' ? 'selected' : ''}>
                            <Link to='/about'>ABOUT</Link>
                        </li>
                    </ul>
                    
                </div>
                <Link className={isDark ? 'button empty dark' : 'button empty'} to='/contact'>
                    CONTACT
                </Link>
            </nav>
            <nav className='mobile'>
                <Link 
                    className={(isDark || openMenu) ? 'logo dark' : 'logo'}
                    to='/' 
                    onClick={closeMenu}>
                        <IoLogoXing />
                </Link>
                <div className={isDark ? 'hamburger-container dark' : 'hamburger-container'}>
                    <button 
                        className={openMenu ? 'hamburger selected' : 'hamburger'} 
                        onClick={handleMenu}>
                        <div className='top' />
                        <div className='middle' />
                        <div className='bottom' />
                    </button>
                    <button 
                        className={openMenu ? 'close selected' : 'close'} 
                        onClick={handleMenu}>
                        <div className='top'/>
                        <div className='bottom'/>
                    </button>
                </div>
                <div className={openMenu ? 'menu active' : 'menu'}>
                    <ul>
                        <li><Link to='/' onClick={handleMenu}>HOME</Link></li>
                        <li><Link to='/dinner-parties' onClick={handleMenu}>DINNER PARTIES</Link></li>
                        <li><Link to='/proposals' onClick={handleMenu}>PROPOSALS</Link></li>
                        <li><Link to='/luxury-events' onClick={handleMenu}>LUXURY EVENTS</Link></li>
                        <li><Link to='/add-ons' onClick={handleMenu}>ADD-ONS</Link></li>
                        <li><Link to='/about' onClick={handleMenu}>ABOUT</Link></li>
                    </ul>
                    <div className={openMenu ? 'menu-bottom active' : 'menu-bottom'}>
                        <div className='socials'>
                            <a className='social-icon'><FaFacebook /></a>
                            <a className='social-icon'><FaInstagram /></a>
                            <a className='social-icon'><FaYoutube /></a>
                            <a className='social-icon'><FaTiktok /></a>
                        </div>
                        <Link to='/contact' onClick={handleMenu} className='button filled bottom'>CONTACT</Link>
                        <span className='copyright'>&#169;{year} KHYARA event planning</span>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar