import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const PageNavigation = ({ title }) => {
  return (
    <Wrapper>
      <NavLink to="/">Home</NavLink> / {title}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 4rem;
  background-color: #aa88ff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 2rem;
  padding-left: 6rem;

  a {
    font-size: 2rem;
    padding-right: 1rem;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}){
   padding-left: 2.3rem;
   width: 100vw
  }
`;

export default PageNavigation;