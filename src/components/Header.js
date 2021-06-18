import React from 'react';
import styled from "styled-components";

const Header = () => {
	return (
		<Container>
			<a href="#">
				<img src="../public/images/nav-barBrand.png" width="80" />
			</a>
			<NavBar>

			</NavBar>
		</Container>
	);
};

export default Header;

const Container = styled.div`
	display: flex;
	min-height: 100px;
	align-items: center;
	justify-content: space-between;
	background-image: linear-gradient(#aa273d, #e24a63, white);
	position: fixed;
	top: 0;
	left: 0;
	right: 0;

`

const NavBar = styled.div``