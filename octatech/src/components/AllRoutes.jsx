import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Overview from './Overview'
import Courses from './Courses'
import Login from './Login'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Overview/>}/>
            <Route path="/courses" element={<Courses/>}/>
            <Route path='/login' element={<Login/>} />
        </Routes>
    </div>
  )
}

export default AllRoutes