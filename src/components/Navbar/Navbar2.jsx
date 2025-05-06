import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from "react-router-dom";

import './navbar2.css'

import { TfiArrowRight } from "react-icons/tfi";


const Navbar2 = () => {
    const [menuClicked, setMenuClicked] = useState(false)

    const handleMenu = () => {
        setMenuClicked(!menuClicked)
    }
    
    const closeMenu = () => {
        setMenuClicked(false)
    }

    return (
        <>
            <header className='header desktop'>
                <nav className='navbar2'>
                    <Link to='/' className='logo'>
                        <h5>AUREA</h5>
                    </Link>
                    <ul className='menu'>
                        <li>
                            <Link to='/dinners'>DINNERS</Link>
                        </li>
                        <li>
                            <Link to='/picnics'>PICNICS</Link>
                        </li>
                        <li>
                            <Link to='/proposals'>PROPOSALS</Link>
                        </li>
                        <li>
                            <Link to='/about'>ABOUT</Link>
                        </li>
                    </ul>
                    <Link to='/book' className='button'>
                        <span className='button-content-wrapper'>
                            <span className='button-content'>BOOK</span>
                            <span className='button-content'>BOOK</span>
                        </span>
                        {/* <span className='button-icon-wrapper'>
                            <span className='button-icon'>
                                <TfiArrowRight />
                            </span>
                            <span className='button-icon'>
                                <TfiArrowRight />
                            </span>                            
                        </span> */}
                    </Link>
                </nav>
            </header>
            <header className='header mobile'>
                <nav className='navbar2'>
                    <Link to='/' className='logo'>
                        <h5>AUREA</h5>
                    </Link>
                    <ul className={menuClicked ? 'menu selected' : 'menu'}>
                        <li>
                            <Link to='/dinners' onClick={() => closeMenu()}>DINNERS</Link>
                        </li>
                        <li>
                            <Link to='/picnics' onClick={() => closeMenu()}>PICNICS</Link>
                        </li>
                        <li>
                            <Link to='/proposals' onClick={() => closeMenu()}>PROPOSALS</Link>
                        </li>
                        <li>
                            <Link to='/about' onClick={() => closeMenu()}>ABOUT</Link>
                        </li>
                    </ul>
                    <button 
                        className='hamburger-container'
                        onClick={() => handleMenu()}
                    >
                        <span 
                            className={menuClicked ? 'hamburger selected' : 'hamburger'}
                        >
                            <div className='top' />
                            <div className='middle' />
                            <div className='bottom' />
                        </span>
                        <span 
                            className={menuClicked ? 'close selected' : 'close'}
                        >
                            <div className='top'/>
                            <div className='bottom'/>
                        </span>
                    </button>
                </nav>
            </header>
        </>
        
    )
}

export default Navbar2