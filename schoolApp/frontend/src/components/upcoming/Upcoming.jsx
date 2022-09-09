import React from 'react'
import {FaMoneyBillWave} from 'react-icons/fa'
import {FaBiking} from 'react-icons/fa'
import {MdComputer} from 'react-icons/md'
import {BiCalendar} from 'react-icons/bi'
import {AiFillFolderOpen} from 'react-icons/ai'

import './upcoming.css'

const Upcoming = () => {
  return (
    <section id="upcoming">
      <h1 className="upt-t"> </h1>
      <div className="container upcoming-container">
          <div className="up-left">
              <div className="up-left-item">
                <FaMoneyBillWave className='up-icon'/>
                <h2 className="up-left-t">Online Payment</h2>
                <div className="up-left-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur natus possimus, error alias doloremque molestiae architecto porro saepe?</div>
              </div>
              <div className="up-left-item">
                <MdComputer className='up-icon'/>
                <h2 className="up-left-t">Student Portal</h2>
                <div className="up-left-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur natus possimus, error alias doloremque molestiae architecto porro saepe?</div>
              </div>
              <div className="up-left-item">
                <FaBiking className='up-icon'/>
                <h2 className="up-left-t">Sports</h2>
                <div className="up-left-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur natus possimus, error alias doloremque molestiae architecto porro saepe?</div>
              </div>
              <div className="up-left-item">
                <AiFillFolderOpen className='up-icon'/>
                <h2 className="up-left-t">Download Resources</h2>
                <div className="up-left-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur natus possimus, error alias doloremque molestiae architecto porro saepe?</div>
              </div>
          </div>
          <div className="up-right">
            <div className="u-r-head">
              <BiCalendar className='event-icon'/>
              <h3 className="u-r-h-title">Upcoming Events</h3>
            </div>
            <div className="u-r-e-l-item">
                <div className="u-r-left">
                  <div className="u-r-month">Aug</div>
                <div className="u-r-date">17</div>
                </div>
                <div className="u-r-right">Coronation of a God!</div>
              </div>
            <div className="u-r-e-l-item">
                <div className="u-r-left">
                  <div className="u-r-month">Aug</div>
                <div className="u-r-date">17</div>
                </div>
                <div className="u-r-right">Coronation of a God!</div>
              </div>
            <div className="u-r-e-l-item">
                <div className="u-r-left">
                  <div className="u-r-month">Aug</div>
                <div className="u-r-date">17</div>
                </div>
                <div className="u-r-right">Coronation of a God!</div>
              </div>
            <div className="u-r-e-l-item">
                <div className="u-r-left">
                  <div className="u-r-month">Aug</div>
                <div className="u-r-date">17</div>
                </div>
                <div className="u-r-right">Coronation of a God!</div>
              </div>
              <div className='v-a-u'>View All</div>
          </div>
      </div>
    </section>
  )
}

export default Upcoming