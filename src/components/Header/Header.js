import React from "react";
import { Container } from "./Header.elements";

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
