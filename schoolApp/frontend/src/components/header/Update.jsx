import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './header.css'

 function Update() {
  const url = "http://127.0.0.1:8000/api/"
  const [items, setItems] = useState([])

  const fetchData = async () => {
    const {data} = await axios.get(url)
    setItems(data) 
    console.log(data)
  }
  useEffect(() => {
    fetchData()
  }, [])
  

  return (
    <div className="update-c">
        <h1>Milestones</h1>
       <div className="update-bar-m">
      <div className="grad-up">
        <div className="bold-t-up">3.5K +</div>
        <div className="light-t-up">Graduants</div>
      </div>
      <div className="grad-up">
        <div className="bold-t-up">7.5K +</div>
        <div className="light-t-up">Students</div>
      </div>
      <div className="grad-up">
        <div className="bold-t-up">500 +</div>
        <div className="light-t-up">Teachers</div>
      </div>
      <div className="grad-up">
        <div className="bold-t-up">3.5K +</div>
        <div className="light-t-up">Graduants</div>
      </div>
    </div> 
    </div>
    
  )
}

export default Update