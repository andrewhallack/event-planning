import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from "react-router-dom";

import './navbar.css'

import { 
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTiktok
} from "react-icons/fa6";
import { IoLogoXing } from "react-icons/io";
import { useMotionValueEvent, useScroll } from 'framer-motion';


const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const location = useLocation()
    const [curPage, setCurPage] = useState(window.location.pathname)
    const [isDark, setIsDark] = useState(false)
    const [disappear, setDisappear] = useState(false)
    const lastScrollY = useRef(0)

    const { scrollYProgress } = useScroll()

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (latest >= 0.9) {
            setIsDark(true)
        } else {
            setIsDark(false)
        }

        const delta = latest - lastScrollY.current

        if (delta > 0 && latest > 0.4) {
            setDisappear(true)
        } else if (delta < 0) {
            setDisappear(false)
        }
        lastScrollY.current = latest
    })

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
        <header className={disappear ? 'navbar disappear' : 'navbar'}>
            <nav className={isDark ? 'desktop dark' : 'desktop'}>
                <Link 
                    className={isDark ? 'logo dark' : 'logo'} 
                    to='/'
                >
                    <span>AUREA</span>
                </Link>
                <div className='menu'>
                    <ul className={isDark ? 'dark' : ''}>
                        <li className={curPage === '/' ? 'selected' : ''}>
                            <Link to='/'>HOME</Link>
                        </li>
                        <li className={curPage === '/dinners' ? 'selected' : ''}>
                            <Link to='/dinners'>DINNERS</Link>
                        </li>
                        <li className={curPage === '/proposals' ? 'selected' : ''}>
                            <Link to='/proposals'>PROPOSALS</Link>
                        </li>
                        <li className={curPage === '/luxury' ? 'selected' : ''}>
                            <Link to='/luxury'>LUXURY</Link>
                        </li>
                        <li className={curPage === '/about' ? 'selected' : ''}>
                            <Link to='/about'>ABOUT</Link>
                        </li>
                    </ul>
                    
                </div>
                <Link className={isDark ? 'button filled dark' : 'button filled light'} to='/contact'>
                    <span className='text'>CONTACT<br />CONTACT</span><span className='dot' />
                </Link>
            </nav>
            <nav className='mobile'>
                <Link 
                    className={(isDark || openMenu) ? 'logo dark' : 'logo'}
                    to='/' 
                    onClick={closeMenu}>
                        <h4>AUREA</h4>
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
                        <li><Link to='/dinners' onClick={handleMenu}>DINNERS</Link></li>
                        <li><Link to='/proposals' onClick={handleMenu}>PROPOSALS</Link></li>
                        <li><Link to='/luxury' onClick={handleMenu}>LUXURY</Link></li>
                        <li><Link to='/about' onClick={handleMenu}>ABOUT</Link></li>
                    </ul>
                    <div className={openMenu ? 'menu-bottom active' : 'menu-bottom'}>
                        {/* <div className='socials'>
                            <a className='social-icon'><FaFacebook /></a>
                            <a className='social-icon'><FaInstagram /></a>
                            <a className='social-icon'><FaYoutube /></a>
                            <a className='social-icon'><FaTiktok /></a>
                        </div> */}
                        <Link to='/contact' onClick={handleMenu} className='button filled dark'>CONTACT</Link>
                        <span className='copyright'>&#169;{year} KHYARA event planning</span>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar