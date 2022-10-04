import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavbarWrapper = styled.div`
  height: 60px;
  background-color: #3d3d3d;  
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const Navlink = styled(NavLink) `
  color: #fff;
  text-decoration: none;
  font-size: 20px;  
`