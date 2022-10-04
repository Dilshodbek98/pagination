import React from 'react'
import { Outlet } from 'react-router-dom'
import { navbar } from '../utils/navbar'
import { NavbarWrapper, Navlink } from './styledNavbar'

const Navbar = () => {
  return (
    <>
      <NavbarWrapper>
        {navbar.map(value => {
          return <Navlink to={value.path} key={value.id}>{value.title}</Navlink>
})}
      </NavbarWrapper>
      <Outlet />
    </>
  )
}

export default Navbar