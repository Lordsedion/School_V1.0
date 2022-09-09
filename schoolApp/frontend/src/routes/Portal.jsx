import React, { useState, useEffect } from 'react'
import Sportal from '../portal/vnav/Sportal.jsx'
import Dashboard from '../portal/dash/Dashboard.jsx'
import Login from './Login.jsx'
import LoaderIcon from './Loader.jsx'
import { shw_namv } from '../portal/vnav/Sportal.jsx'
import { GoThreeBars } from 'react-icons/go'




function Portal() {

  const [errors, setErrors] = useState(false)
  const [loading, setLoading] = useState(null)
  let url = 'http://localhost:8000/portal'

  // const [access_key, setAccessKey] = useState()
  // setAccessKey("")

  useEffect(() => {
    if (sessionStorage.getItem('access') !== null) {
      fetch('http://localhost:8000/api/checkaccess', {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          "Authorization": sessionStorage.getItem('access')
        },
      }) 
        .then(response => {
          console.log("Here too")
          return response.json().then(data => {
            console.log("Status", data.status)
            if (data.status == 1) {
              setLoading(true)
            }
            else { console.log("Acess key expired") }
            return data
          })
        }
        )
    }
    else {
      setLoading(false)
    }
  }, [])

  return (
    <>
      <GoThreeBars className='hamgurger-sportal' onClick={() => shw_namv()} />
      {loading === null && <LoaderIcon/>}
      {loading === false && <Login />}
      {loading === true && <div id='portal-elements'>
        <Sportal />
        <div className="portal-elements-right">
          <Dashboard />
        </div>
      </div>}
    </>



  )
}

export default Portal