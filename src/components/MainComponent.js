import React, { Fragment } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import ContactUs from './ContactUsComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const Main = () => {
	return (
		<Fragment>
			<Header />
			<Switch>
				<Route path="/home" component={Home} />
				<Route exact path="/about" component={About} />
				<Route exact path="/contactus" component={ContactUs} />
				<Redirect to="/home" />
			</Switch>
			<Footer />
		</Fragment>
	);
};

export default Main;
