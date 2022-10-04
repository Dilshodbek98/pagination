import React, { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { navbar } from '../utils/navbar'
import Home from './home'
import Navbar from './navbar'

const Index = () => {
  const data = JSON.parse(localStorage.getItem('token'))
  const [state] = useState(data)
  return (
    <div>
      <Routes>
        <Route element={<Navbar/>}>
          <Route exaact path='/' element={<Home/>}/>
          {navbar.map(value => {
            return !value.isPrivate
            ? <Route key={value.id} path={value.path} element={value.element}/>
            : <Route key={value.id} path={value.path} element={state ? value.element : <Navigate to={'/home'}/>} /> 
})}
          <Route path='*' element={<h1>Page not found</h1>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default Index