import React from 'react';
import Header from './components/Header.js';
import Guides from './components/Guides';
import Credits from './components/Credits';
import './Info.css';
import { motion } from 'framer-motion';

const Info = () => {
	return (
		<motion.div
			className="container-global"
			initial={{
				height: 0,
				x: -1 * window.innerWidth,
			}}
			animate={{
				height: '100%',
				x: 0,
				transition: { duration: 0.4 },
			}}
			exit={{
				height: 0,
				x: window.innerWidth,
				transition: { duration: 0.4 },
			}}
		>
			<Header title="information" />
			<main class="container-main">
				<Guides />
				<Credits />
			</main>
		</motion.div>
	);
};

export default Info;
