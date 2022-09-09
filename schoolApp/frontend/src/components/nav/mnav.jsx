import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { AiOutlineBulb } from 'react-icons/ai'
import { MdOutlineSchool } from 'react-icons/md'
import { IoMdPhotos } from 'react-icons/io'
import { AiOutlineMessage } from 'react-icons/ai'
import { IoIosContact } from 'react-icons/io'
import { useState } from 'react'

const Mnav = () => {
    const [activeNav, setActiveNav] = useState('#')
  return (
    <div id="fixed-nav-mb">
    <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active-mb': ''}><div className="home"><AiFillHome className='mb-r-icons' /></div></a>
    <a href="#profile" onClick={() => setActiveNav('#profile')} className={activeNav === '#profile' ? 'active-mb': ''}><div className="profile-mb"> <IoIosContact className='mb-r-icons' /></div></a>
        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active-mb': ''}><div className="about"><AiOutlineBulb className='mb-r-icons' /></div></a>
        <a href="#gallery" onClick={() => setActiveNav('#gallery')} className={activeNav === '#gallery' ? 'active-mb': ''}><div className="gallery"><IoMdPhotos className='mb-r-icons' /></div></a>
        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active-mb': ''}><div className="contact"><AiOutlineMessage className='mb-r-icons' />  </div></a>
</div>
  )
}

export default Mnav