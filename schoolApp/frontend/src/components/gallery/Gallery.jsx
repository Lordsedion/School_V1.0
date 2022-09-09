import React from 'react'
import './gallery.css'

import slide1 from '../../../static/Images/slide1.bg.png'
import slide2 from '../../../static/Images/slide5.bg.jfif'
import slide3 from '../../../static/Images/slide7.bg.jfif'
import slide4 from '../../../static/Images/slide3.bg.jfif'
import slide5 from '../../../static/Images/slide5.bg.jpg'
import slide6 from '../../../static/Images/slide6.bg.jfif'
import slide7 from '../../../static/Images/slide1.bg.jpg'


const Gallery = () => {
    return (
        <section id="gallery">
            {/* <div className='gl-god' alt="Gallery">
                <div className="gal-img-details">
                    <img src={slide1} alt="Gallery" />
                    <p className="gim-d">Career day</p>
                </div>

                <div className="gal-img-details">
                    <img src={slide2} alt="Gallery" />
                    <p className="gim-d">Career day</p>
                </div>
                <div className="gal-img-details">
                    <img src={slide3} alt="Gallery" />
                    <p className="gim-d">Career day</p>
                </div>
                <div className="gal-img-details">
                    <img src={slide5} alt="Gallery" />
                    <p className="gim-d">Career day</p>
                </div>
            </div> */}
            <h1>Photo Gallery</h1>
            <div className="container gal-container">
                <div className="gal-row">
                    <div className="gal-column">
                        <div className="img-g-h">
                            <img src={slide1} className='i-i-g' alt="Gallery" />
                            <div className="img-g-hv"><p>Career Day</p></div>
                        </div>
                        <div className="img-g-h">
                            <img src={slide2} className='i-i-g' alt="Gallery" />
                            <div className="img-g-hv"><p>Career Day</p></div>
                        </div>
                        <div className="img-g-h">
                            <img src={slide3} className='i-i-g' alt="Gallery" />
                            <div className="img-g-hv"><p>Career Day</p></div>
                        </div>
                        <div className="img-g-h">
                            <img src={slide4} className='i-i-g' alt="Gallery" />
                            <div className="img-g-hv"><p>Career Day</p></div>
                        </div>
                        <div className="img-g-h">
                            <img src={slide5} className='i-i-g' alt="Gallery" />
                            <div className="img-g-hv"><p>Career Day</p></div>
                        </div>
                    </div>
                    <div className="gal-column">
                        <div className="img-g-h">
                            <img src={slide4} className='i-i-g' alt="Gallery" />
                            <div className="img-g-hv"><p>Career Day</p></div>
                        </div>
                        <div className="img-g-h">
                            <img src={slide6} className='i-i-g' alt="Gallery" />
                            <div className="img-g-hv"><p>Career Day</p></div>
                        </div>
                        <div className="img-g-h">
                            <img src={slide5} className='i-i-g' alt="Gallery" />
                            <div className="img-g-hv"><p>Career Day</p></div>
                        </div>
                        <div className="img-g-h">
                            <img src={slide3} className='i-i-g' alt="Gallery" />
                            <div className="img-g-hv"><p>Career Day</p></div>
                        </div>
                        <div className="img-g-h">
                            <img src={slide1} className='i-i-g' alt="Gallery" />
                            <div className="img-g-hv"><p>Career Day</p></div>
                        </div>
                    </div>
                    <div className="gal-column">
                        <div className="img-g-h">
                            <img src={slide5} className='i-i-g' alt="Gallery" />
                            <div className="img-g-hv"><p>Career Day</p></div>
                        </div>
                        <div className="img-g-h">
                            <img src={slide2} className='i-i-g' alt="Gallery" />
                            <div className="img-g-hv"><p>Career Day</p></div>
                        </div>
                        <div className="img-g-h">
                            <img src={slide1} className='i-i-g' alt="Gallery" />
                            <div className="img-g-hv"><p>Career Day</p></div>
                        </div>
                        
                        <div className="img-g-h">
                            <img src={slide6} className='i-i-g' alt="Gallery" />
                            <div className="img-g-hv"><p>Career Day</p></div>
                        </div>
                        <div className="img-g-h">
                            <img src={slide7} className='i-i-g' alt="Gallery" />
                            <div className="img-g-hv"><p>Career Day</p></div>
                        </div>
                    </div>
                    <div className="gal-column">
                        <div className="img-g-h">
                            <img src={slide4} className='i-i-g' alt="Gallery" />
                            <div className="img-g-hv"><p>Career Day</p></div>
                        </div>
                        <div className="img-g-h">
                            <img src={slide7} className='i-i-g' alt="Gallery" />
                            <div className="img-g-hv"><p>Career Day</p></div>
                        </div>
                        <div className="img-g-h">
                            <img src={slide6} className='i-i-g' alt="Gallery" />
                            <div className="img-g-hv"><p>Career Day</p></div>
                        </div>
                        <div className="img-g-h">
                            <img src={slide2} className='i-i-g' alt="Gallery" />
                            <div className="img-g-hv"><p>Career Day</p></div>
                        </div>
                        <div className="img-g-h">
                            <img src={slide1} className='i-i-g' alt="Gallery" />
                            <div className="img-g-hv"><p>Career Day</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Gallery