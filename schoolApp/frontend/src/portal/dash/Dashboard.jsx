import { useState, useEffect } from 'react'
import React from 'react'
import './dashboard.css'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { Chart, CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend } from 'chart.js'
import { Pie, Bar, Doughnut } from 'react-chartjs-2'
import Perf from './Perf.jsx'
import Prospectus from './Prospectus.jsx'
import Payment from './Payment.jsx'

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
)



const options = {
  plugins: {
    title: {
      display: 'true',
      position: 'bottom',
      text: 'Doughnut Chart',
      color: 'blue',
      font: {
        size: 24
      },
      padding: {
        top: 30,
        bottom: 30
      },
      responsive: 'true',
      animation: {
        animateScale: 'true',
      },
    }
  },
}

function Dashboard() {
  
  const [name_, setName_] = useState("")
  const [email, setEmail] = useState("")
  const [date_joined, setDateJoined] = useState("")
  const [first_name, setFirstName] = useState("")
  const [last_name, setLastName] = useState("")
  const [last_login, setLastLogin] = useState("")
  const [sports, setSports] = useState("")
  const [attendance, setAttendance] = useState("")
  const [academics, setAcademics] = useState("")

  let OVG07NR = sessionStorage.getItem('738BBN2QA4ESCQ7RI95OVG07NR5PE3OK1W3O6885FET');
  fetch(`http://localhost:8000/api/pupils?user=${OVG07NR}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${sessionStorage.getItem('access')}`
    },
  })
    .then(response => {
      return response.json().then((data) => {
        console.log(data)
        setSports(data[1][0]["sports"])
        setAcademics(data[2][0]["academics"])
        setAttendance(data[3][0]["attendance"])
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

    const data3 = {
      labels: ['Present', 'Absent'],
      datasets: [
        {
          data: [attendance, 100-attendance],
          borderColor: ['rgba(255,206,86,0.2)'],
          backgroundColor: ['#125bed',
            '#d4ffff',],
          hoverBackgroundColor: '#0943b6',
          pointBackgroundColor: 'rgba(255,206,86,0.2)',
          borderWidth: '3',
          circumference: '340',
          cutout: '90%',
        }
      ]
    }
    const data1 = {
      labels: ['Academics'],
      datasets: [
        {
          data: [academics, 100-academics],
          borderColor: ['rgba(25,206,86,0.2)'],
          backgroundColor: ['#23f662',
            '#d4ffff',],
          pointBackgroundColor: 'rgba(255,206,86,0.2)',
          hoverBackgroundColor: '#06a210',
          borderWidth: '3',
          circumference: '340',
          cutout: "90%",
        }
      ]
    }
    const data2 = {
      labels: ['Sports'],
      datasets: [
        {
          data: [sports, 100-sports],
          borderColor: ['rgba(255,206,86,0.2)'],
          backgroundColor: ['rebeccapurple',
            '#d4ffff',],
          pointBackgroundColor: 'rgba(255,206,86,0.8)',
          hoverBackgroundColor: '#7e0782',
          borderWidth: '3',
          circumference: '340',
          cutout: '90%',
        }
      ]
    }


  return (
    <div className='d-general'>
      <section id="dashboard">
        <div className="dashboard-container">
          <h1 className="ds-ttl">Welcome {name_}</h1>
          <div className="dash-content" >
            {/* <img src={dba} alt="" className="dashc-img" /> */}
            <div className="dash-cjs-h bb-blue">
              <div className="d-cjs-h-left">
                <Doughnut data={data3} options={[options, { maintainAspectRatio: false }]} className='cjs-donot' redraw />
                <h4 className='blue'>{attendance}%</h4>
                <h2 className='blue'>Attendance</h2>
              </div>
              <div className="d-cjs-h-right">
                <BsThreeDotsVertical className='sp-icon' />
              </div>
            </div>
            <div className="dash-cjs-h bb-green">
              <div className="d-cjs-h-left">
                <Doughnut data={data1} options={[options, { maintainAspectRatio: false }]} className='cjs-donot' redraw />
                <h4 className="green">{academics}%</h4>
                <h2 className='green'>Academics</h2>
              </div>
              <div className="d-cjs-h-right">
                <BsThreeDotsVertical className='sp-icon' />
              </div>
            </div>
            <div className="dash-cjs-h bb-purple">
              <div className="d-cjs-h-left">
                <Doughnut data={data2} options={[options, { maintainAspectRatio: false }]} className='cjs-donot' redraw />
                <h4 className="rebeccapurple">{sports}%</h4>
                <h2 className='rebeccapurple'>Sports</h2>
              </div>
              <div className="d-cjs-h-right">
                <BsThreeDotsVertical className='sp-icon' />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Perf />
      <Payment />
      <Prospectus />
    </div>
  )
}

export default Dashboard