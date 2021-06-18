import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <a href="#">
        <img src="/images/nav-barBrand.png" width="80" />
			</a>
			<h1 class="title">Private Time</h1>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  min-height: 80px;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(#aa273d, #e24a63, white);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;
