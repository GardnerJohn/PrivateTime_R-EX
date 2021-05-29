import React, { Fragment } from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
// import './styles/Styles.scss';

const App = () => {
	return (
		<BrowserRouter>
			<Fragment>
				<Main />
			</Fragment>
		</BrowserRouter>
	);
};

export default App;
