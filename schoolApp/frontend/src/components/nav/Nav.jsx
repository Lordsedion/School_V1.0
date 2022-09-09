import React from 'react'
import logo from '../../../static/Images/logo.bg.png'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './nav.css'

function show_hamburger() {
    document.getElementById("vertical-nav").style.display = 'block'
    document.getElementById("ham-id").style.display = 'none'
    document.getElementById("times-id").style.display = 'block'
}
function remove_hamburger() {
    document.getElementById("vertical-nav").style.display = 'none'
    document.getElementById("ham-id").style.display = 'block'
    document.getElementById("times-id").style.display = 'none'
}

const Nav = () => {
    return (
        <nav >
            <div className="container nav-container">
                <div id="logo-sec">
                <a href='/' className='blue'> <img src={logo} className='logo-img' alt="Logo" /></a>
                    <a href='/' className='blue'> <div className="logo-title">Seidon Int'l School</div></a>
                </div>
                <div id="menu-list-hor">
                    <div className="menu-list-hor">
                    <a href='/' className='blue'><div className="home">Home</div></a>
                    <a href='/about' className='blue'> <div className="about">About</div></a>
                    <a href='/about#addmmiissiioonnn' className='blue'>  <div className="admit">Admissions</div></a>
                    <a href='#gallery' className='blue'>  <div className="gallery">Gallery</div></a>
                    <a href='#faq' className='blue'> <div className="contact"> Contact </div></a>
                    </div>
                    <div id="sn-lg-prof">
                        {/* <div className="signup-but">Register</div> */}
                        {/* <div className="login-but">Login</div> */}
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default Nav