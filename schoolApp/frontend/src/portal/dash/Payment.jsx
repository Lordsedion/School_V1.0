import React from 'react'
import {BsBank} from 'react-icons/bs'
import {IoIosBus} from 'react-icons/io'
import {BsThreeDots} from 'react-icons/bs'
import {TiTick} from 'react-icons/ti'
import {FaTimes} from 'react-icons/fa'
import {HiOutlineNewspaper,} from 'react-icons/hi'
import './payment.css'

const Payment = () => {
  return (
    <section id="payment">
        <div className="payment-container">
            <div className="p-con-item">
                <BsBank className='prosp-icon'/>
                <h3>School Fees Payment</h3>
                <TiTick className='l-pv-good-icon'/>
            </div>
            <div className="p-con-item">
                <IoIosBus className='prosp-icon'/>
                <h3>School Bus Payment</h3>
                <FaTimes className='l-pv-fail-icon'/>
            </div>
            <a href='/portal/result' className="p-con-item"><div >
                <HiOutlineNewspaper className='prosp-icon'/>
                <h3>Results</h3>
            </div>
            </a>
        </div>
    </section>
  )
}

export default Payment