import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './Nav';

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
         <img  className="navlogo" src='./images/navlogo.png' alt='logo'/>
      </NavLink>
      
      <Nav/>
    </MainHeader>
  )
}

const MainHeader = styled.header` 
   padding: 0 4.8rem;
   height: 7rem;
   background-color:  #aa88ff;
   display:flex;
   justify-content: space-between;
   align-items: center;
   position: relative;

   .navlogo{
      height: 5.8rem;
      margin-left:1rem;
   }

   @media (max-width:${({theme})=>theme.media.mobile}) { 
    .navlogo{
      height: 5.2rem;
      margin-left:-3rem;
   }
   } 
`;

export default Header