import { useState } from 'react'
import React from 'react'
import slide5 from '../../../static/Images/slide5.bg.jpg'
import { MdOutlineDashboard } from 'react-icons/md'
import { BsCreditCard } from 'react-icons/bs'
import { SiSimpleanalytics } from 'react-icons/si'
import { TbReportAnalytics } from 'react-icons/tb'
import './sportal.css'


let nav_tg = true
let modal = document.getElementsByClassName("hamgurger-sportal");

window.onclick = function (event) {
    if (nav_tg == false) {
        for (var i = 0; i < modal.length; i++) {
            if (event.target != modal[i]) {
                nav_tg = true
            }
        }
    }
}

export function shw_namv() {
    if (nav_tg) {
        document.getElementById("vertical-nav").classList.add("fadde-left")
        nav_tg = false
    }
    else {
        nav_tg = true
        document.getElementById("vertical-nav").classList.remove("fadde-left")
    }
}

function Sportal() {
    const [name_, setName_] = useState("")
    const [email, setEmail] = useState("")
    const [date_joined, setDateJoined] = useState("")
    const [first_name, setFirstName] = useState("")
    const [last_name, setLastName] = useState("")
    const [last_login, setLastLogin] = useState("")
    let OVG07NR = sessionStorage.getItem('738BBN2QA4ESCQ7RI95OVG07NR5PE3OK1W3O6885FET');

    try {
        if (sessionStorage.getItem('access') !== null) {
        fetch(`http://localhost:8000/api/pupils?user=${OVG07NR}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${sessionStorage.getItem('access')}`
          },
    })
        .then(response => {
            return response.json().then((data) => {
                data = data[0]
                setName_(data["username"])
                setEmail(data["email"])
                setDateJoined(data["date_joined"])
                setLastLogin(data["last_login"])
                setLastName(data["last_name"])
                setFirstName(data["first_name"])
                return data
            })
        })
    }
    } catch (error) {
        console.log("Error")
    }
    
    const [activeNav, setActiveNav] = useState("")
    return (
        <section id="vertical-nav">
            <div className="v-nav-container">
                <div className="vnav-tt">
                    <img src={slide5} className='vnav-p-img' alt="profile" />
                    <h3 className='ssp-name'>{first_name} {last_name}</h3>
                </div>
                <div className="vnav-lower">
                    <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? ' sp-at-s' : ''}>
                        <div className="v-lw-items ">
                            <MdOutlineDashboard className='sp-icon' />
                            <h4 className="vlwi-n">Dashboard</h4>
                        </div>
                    </a>

                    <a href="#dashboard" id='per-m' onClick={() => setActiveNav('#dashboard')} className={activeNav === '#dashboard' ? 'sp-at-s' : ''}><div className="v-lw-items">
                        <SiSimpleanalytics className='sp-icon' />
                        <h4 className="vlwi-n">Performance</h4>
                    </div>
                    </a>
                    <a href="#payment" onClick={() => setActiveNav('#payment')} className={activeNav === '#payment' ? 'sp-at-s' : ''}>
                        <div className="v-lw-items">
                            <BsCreditCard className='sp-icon' />
                            <h4 className="vlwi-n">Online Payments</h4>
                        </div>
                    </a>
                    <a href="/portal/result" onClick={() => setActiveNav('#result')} className={activeNav === '#result' ? 'sp-at-s' : ''}>
                        <div className="v-lw-items">
                            <TbReportAnalytics className='sp-icon' />
                            <h4 className="vlwi-n">Results</h4>
                        </div>
                    </a>
                    <a href="#prosp" onClick={() => setActiveNav('#prosp')} className={activeNav === '#prosp' ? 'sp-at-s' : ''}>
                        <div className="v-lw-items">
                            <MdOutlineDashboard className='sp-icon' />
                            <h4 className="vlwi-n">Prospectus</h4>
                        </div>
                    </a>
                    {/* <a href="#query" onClick={() => setActiveNav('#query')} className={activeNav === '#query' ? 'sp-at-s' : ''}>
                        <div className="v-lw-items">
                            <MdOutlineDashboard className='sp-icon' />
                            <h4 className="vlwi-n">Complaints</h4>
                        </div>
                    </a> */}
                </div>

            </div>
        </section>
    )
}

export default Sportal