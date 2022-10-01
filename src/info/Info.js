import React from 'react';
import Header from './components/Header.js';
import Guides from './components/Guides';
import Credits from './components/Credits';
import './Info.css';

const Info = () => {
	return (
		<>
			<Header title="information" />
			<main class="container-main">
				<Guides />
				<Credits />
			</main>
		</>
	);
};

export default Info;
