import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Overview from './Overview'
import Courses from './Courses'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Overview/>}/>
            <Route path="/courses" element={<Courses/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes