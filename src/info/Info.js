import React from 'react';
import Header from './components/Header.js';
import Guides from './components/Guides';
import Credit from './components/Credit';
import './Info.css';

const mainStyle = {};

const Info = () => {
	return (
		<>
			<Header title="information" />
			<main class="container-main">
				<Guides />
				<Credit />
			</main>
		</>
	);
};

export default Info;
