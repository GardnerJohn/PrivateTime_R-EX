import React from "react";
import styled from "styled-components";

const NavBar = () => {
  return <NavBarContainer>Navbar</NavBarContainer>;
};

export default NavBar;

const NavBarContainer = styled.div`
  display: flex;
  background-color: black;
  align-items: center;
  justify-content: center;
  min-height: 50px;
`;
