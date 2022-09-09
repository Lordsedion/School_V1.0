import React from 'react'
import Nav from './nav/Nav.jsx'
import  {Outlet} from 'react-router-dom'
import Mnav from './nav/mnav.jsx' 


const App = () => {
    return (
        <>
            <Nav />         
            <Mnav/>
            <Outlet/>
        </>
    )
}

export default App