import React from 'react'
import { FaRegNewspaper } from 'react-icons/fa'
import { GiBookshelf } from 'react-icons/gi'
import { TbSitemap } from 'react-icons/tb'
import slide5 from '../../../static/Images/slide5.bg.jpg'
import dn from '../../../static/Images/cv.bg.pdf'
import './prospectus.css'

function setPrevP(event) {
    var preview = document.getElementsByClassName("up-p-img");
    if (event.target.files.length > 0) {
        for (let i = 0; i < event.target.files.length; i++) {
            var src = URL.createObjectURL(event.target.files[i]);
            console.log('well', src)
            preview[i].src = src;
            preview[i].style.display = "block";
            document.getElementById('upp-btn').style.display = 'block'
        }
    }

}

const Prospectus = () => {
    return (
        <section id="prosp">
            <div className="prosp-container">
                <h2>Prospectus</h2>
                <div className="prosp-flex">
                    <a href={dn} download className="prosp-flex-item">
                        <div >
                            <FaRegNewspaper className='prosp-icon' />
                            <p className="pfi-txt">Get the monthly Newsletter</p>
                        </div>
                    </a>
                    <a href={dn} download className="prosp-flex-item">
                        <div >
                            <GiBookshelf className='prosp-icon' />
                            <p className="pfi-txt">Download Resources</p>
                        </div>
                    </a>
                    <a href={dn} download className="prosp-flex-item">
                        <div >
                            <TbSitemap className='prosp-icon' />
                            <p className="pfi-txt">Prospectus</p>
                        </div>
                    </a>
                </div>

                <div className="update-portal-pp">
                    <div className="box-p-img">
                        <img src={slide5} className='up-p-img' alt="profile" />
                        <form className='pp-picC'>
                            <input type="file" name="pics" id="u-p_img" className='none' multiple onChange={(event) => setPrevP(event)} />
                            <div className="flex-up-pp">
                                 <label htmlFor="u-p_img" id='img_for-inp' >Upload a photo</label>
                                 <button type='submit' id="upp-btn">Upload</button>
                                </div>
                            <img className='upp-2 up-p-img' />
                            
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Prospectus