import React from 'react'
import './header.css'
// import headerimg from '../../../static/Images/slide5.jpg'

const Header = () => {
  return (
    <header>
      <div className="ode">
      </div>
      <div className="container">
        <div className="header-container">
          <div className="header-left">
            <h1>Securing An Excellent Future For Your Kids</h1>
            <p className="sub-text-h">Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do.</p>
            <div className="sign-h"><a href='/portal' className='white'>School Portal</a> </div>
          </div>
          <div className="header-right"></div>
        </div> 
      </div>
    </header>
  )
}

export default Header