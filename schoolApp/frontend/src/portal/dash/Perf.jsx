import React from 'react'
import './perf.css'
import { Chart, CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend } from 'chart.js'
import { Pie, Bar, Doughnut } from 'react-chartjs-2'

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
)

const data2 = {
    labels: ['Mathematics', 'English', 'Physical Education', 'Further Mathematics', 'Technical Drawing', 'Language', 'Verbal Aptitude', 'Chess', 'Creative Arts', 'Python'],
    datasets: [
      {
        data: [80,98,52,59,73, 65, 67,76,56,89,78],
        borderColor: ['rgba(255,206,86,0.2)', ],
        label: "You",
        backgroundColor: [
        'blue',],
        pointBackgroundColor: 'rgba(255,206,86,0.8)',
        // hoverBackgroundColor:'#7e0782',
        borderWidth: '3',
        barThickness: 18,
      },
      {
        data: [56,67,50,56,71,43, 54, 61, 52, 56],
        borderColor: ['rgba(255,206,86,0.2)', ],
        label:'Average Student',
        backgroundColor: [
       'red'],
        pointBackgroundColor: 'rgba(255,206,86,0.8)',
        // hoverBackgroundColor:'#7e0782',
        borderWidth: '3',
        barThickness: 15,
      },
    ],
  }
  
  const options = {
    plugins: {
      title: {
        display: 'true',
        position: 'bottom',
        text: 'Your Recent Performance',
        color: 'blue',
        font: {
          size: 24
        },
        padding: {
          top: 30,
          bottom: 30
        },
        maintainAspectRatio: false,
        animation: {
          animateScale: 'true',
        },
      }
    },
  }

const Perf = () => {
  return (
    <section id="performance">
    <div className="performance-container">
      <h1>Performance</h1>
        <Bar data={data2} options={options} className='char-d' redraw />
        <div className="perf-mobile"></div>
    </div>
  </section>
  )
}

export default Perf