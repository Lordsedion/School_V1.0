import React from 'react'
import logo from '../../../static/Images/logo.bg.png'
import { MdOutlineImportantDevices } from 'react-icons/md'
import { FaChalkboardTeacher } from 'react-icons/fa'
import { AiOutlineMessage } from 'react-icons/ai'
import { FiPhone } from 'react-icons/fi'
import { GoLocation } from 'react-icons/go'
import { AiOutlineCopyrightCircle } from 'react-icons/ai'
import './footer.css'

const Footer = () => {
    return (
        <section id="footer">
            <div className="container footer-container">
                <div className="footer-head-t">
                    <div className="logo-f-t">
                        <img src={logo} alt="Logo" className="footer-logo-img" />
                        <h1 className="footer-logo-b">Seidon High School</h1>
                    </div>

                    <div className="footer-right-t">
                        <div className="ft-rt-item">
                            <MdOutlineImportantDevices className='footer-icons ' />
                            <h3>Student Portal</h3>
                        </div>
                        <div className="ft-rt-item">
                            <FaChalkboardTeacher className='footer-icons ' />
                            <h3>Teacher Portal</h3>
                        </div>
                        <div className="ft-rt-item d-1024">
                            <AiOutlineMessage className='footer-icons ' />
                            <h3>Contact us</h3>
                        </div>
                    </div>
                </div>
                <div className="footer-body-t">
                    <div className="about-f-t">
                        <h3 className="a-f-t-tt">About us</h3>
                        <p className="a-f-t-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eos rerum minus sapiente, ipsam optio molestias perferendis iste atque placeat.</p>
                        <div className="lrn-ft">Learn More</div>
                    </div>
                    <div className="ul-flex">
                        <ul className="all-links">
                            <li>Home</li>
                            <li>About</li>
                            <li>Online Payment</li>
                            <li>Admission</li>
                            <li>School Portal</li>
                            <li>Online Resources</li>
                        </ul>
                        <ul className="all-links">
                            <li>Quiz</li>
                            <li>Blog</li>
                            <li>Events</li>
                            <li>Gallery</li>
                            <li>FAQs</li>
                        </ul>
                    </div>

                    <div className="ft-c-info">
                        <h3 className="ft-c-info-ttl">Contact us</h3>
                        <div className="f-t-c">
                            <GoLocation className='fot-s-icon' />
                            <p className="ft-t-loc">By the Sun God avenue, Beside the Crystal Sea</p>

                        </div>
                        <div className="f-t-ph">
                            <FiPhone className='fot-s-icon' />
                            <div className="ph-n-ft">
                                <a href="tel:+234-8133365769">08133365769</a>
                                <a href="tel:+234-9061873871">09061873871</a>
                            </div>
                        </div>

                    </div>
                </div>
                <p className='ft-cpy-r'><AiOutlineCopyrightCircle/>2022 LordSeidon Design</p>
            </div>
        </section>
    )
}

export default Footer