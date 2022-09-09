import React, { useState, useEffect } from 'react'
import './result.css'
import Sportal from '../portal/vnav/Sportal.jsx'
import { GoThreeBars } from 'react-icons/go'
import { shw_namv } from '../portal/vnav/Sportal.jsx'
import LoaderIcon from './Loader.jsx'
import Login from './Login.jsx'

// const paid = false

// function shw_r() {
//   if (paid === true) {
//         document.getElementById('show-result').style.display = 'table'
//   }
// }

function Result() {

  const [loading, setLoading] = useState(true)
useEffect(() => {
  if (sessionStorage.getItem('access') !== null) {
    fetch('http://localhost:8000/api/checkclass', {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        "X-CSRFToken": csrftoken,
        "username": sessionStorage.getItem("738BBN2QA4ESCQ7RI95OVG07NR5PE3OK1W3O6885FET")
      },
    }).then(response => {
      return response.json().then((data) => {
        console.log("Data...", data)
        let tp_data = []
        setTerm(data[1])
        if (data.length !== 0) {
          for (var i = 0; i < data.length - 2; i++) {
            tp_data.push(data[i])
          }
          setData(tp_data)
        }
        let grade = []
        for (var i = 0; i < tp_data[0].length; i++) {
          let small_grade = {}
          for (var x = 0; x < tp_data[0][i].length; x++) {
            if (tp_data[0][i][x].score >= 75) {
              small_grade[x] = "A+"
            }
            else if (tp_data[0][i][x].score < 75 && tp_data[0][i][x].score >= 60) {
              small_grade[x] = "B"
            }
            else if (tp_data[0][i][x].score < 60 && tp_data[0][i][x].score >= 50) {
              small_grade[x] = "C"
            }
            else if (tp_data[0][i][x].score < 50 && tp_data[0][i][x].score > 39) {
              small_grade[x] = "D"
            }
            else if (tp_data[0][i][x].score <= 39) {
              small_grade[x] = "F"
            }
          }
          grade.push(small_grade)
        }

        setGradeList(grade)
        console.log(" Data", tp_data)
        setData(data[0])


        let pickledata = {}

        for (var i = 0; i < data[2].length; i++) {
          pickledata[data[2][i].id] = data[2][i].Course
        }
        let pickleaverage = {}
        for (var i = 0; i < data[3].length; i++) {
          pickleaverage[i] = data[3][i].Average
        }
        setAverag(pickleaverage)
        setSubjectData(pickledata)

        // console.log(subjectData["1"])
        // console.log(Avarage[1])
      })
    })
  }
  else {
    setLoading(false)
  }
  
}, [])

  const [bigData, setData] = useState([])
  const [subjectData, setSubjectData] = useState()
  const [Avarage, setAverag] = useState([])
  const [gradeList, setGradeList] = useState([])
  const [term, setTerm] = useState([])

  function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        // Does this cookie string begin with the name we want?
        if (cookie.substring(0, name.length + 1) === (name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }
  const csrftoken = getCookie('csrftoken');
  console.log("loading...: ", loading)
  
  const total_data = [
    {
      ind: '#',
      t_name: 'Total',
      total: 900,
      obtained: 897,
      grade: 'A+',
      remarks: 'A wonderful student',
    }
  ]
  return (
    <>
    {loading === false && window.location.replace("http://localhost:8000/login")}
    {loading === true && 
      <div className="flexer">
      <Sportal />
      <section id="result">
        <GoThreeBars className='hamgurger-sportal' onClick={() => shw_namv()} />
        <>
          {bigData.length == 0 && <LoaderIcon/>}
          {(bigData.length > 0 && gradeList != []) && (
            <div className="result-container">
              {
                bigData.map((x) => {
                  return (
                    <>
                      <h3 className="term-title">{term[bigData.indexOf(x)].Add_term}</h3>
                      <div className="result-p-hol-f" >
                        <div className=''>{/* tempoary div */}
                          <table className="st-table" id='show-result'>
                            <tr className='bg-blue white result-tta'>
                              <th className='bor-rad-3'><p>Index</p></th>
                              <th><p className='max-content'>Subject</p></th>
                              <th><p className='max-content'>Total Marks</p> </th>
                              <th><p className='max-content'>Marks Obtained</p></th>
                              <th><p className='max-content'>Average Score</p></th>
                              <th><p className='max-content'>Grade</p></th>
                              <th className='bor-rad-2'><p>Remarks</p></th>
                            </tr>
                            {
                              x.map(({ subject_id, score, remark }, index) => {
                                return (
                                  <tr>
                                    <td className='bold-4'>{index + 1}</td>
                                    <td className='bold-2'>{subjectData[`${subject_id}`]}</td>
                                    <td className='bold-2'>{100}</td>
                                    <td className='bold-2'>{score}</td>
                                    <td className='bold-2'>{Avarage[index]}</td>
                                    <td className='bold-2'>{gradeList[bigData.indexOf(x)][index]}</td>
                                    <td className='bold-2'>{remark}</td>
                                  </tr>
                                )
                              })
                            }
                            {
                              total_data.map(({ ind, t_name, total, obtained, grade, remarks }) => {
                                return (
                                  <tr className='bold-2 white result-tb-tdb'>
                                    <td className='bor-rad-3'>{ind}</td>
                                    <td>{t_name}</td>
                                    <td>{total}</td>
                                    <td>{obtained}</td>
                                    <td>{obtained}</td>
                                    <td>{grade}</td>
                                    <td className='bor-rad-2'><p className='max-content'>{remarks}</p></td>
                                  </tr>
                                )
                              })
                            }

                          </table>

                        </div>

                      </div>
                    </>

                  )
                })
              }
            </div>
          )}
        </>
      </section>
    </div>
  } 
    </>

  )
}

export default Result

