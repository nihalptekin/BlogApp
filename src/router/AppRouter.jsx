
import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
import Navbar from '../components/Navbar'
import Register from '../pages/Register'
import Detail from '../pages/Detail'
import NewBlog from '../pages/NewBlog'
import MyBlog from '../pages/MyBlog'




const AppRouter = () => {
  return (
    <Router>
    <Navbar/>
        <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/detail" element={<Detail/>}/>
            <Route path="/new-blog" element={<NewBlog/>}/>
            <Route path="/my-blogs" element={<MyBlog/>}/>
        </Routes>
    </Router>
  )
}

export default AppRouter