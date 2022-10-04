import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Pagination from '../components/main'


const Root = () => {
  return (
    <div>
      <BrowserRouter>
      <Pagination/>
      </BrowserRouter>
    </div>
  )
}
export default Root