import React from 'react';
import { Link } from 'react-router-dom';
import homelogo from '../assets/img/homelogo.png';
import './Home.css';
import { motion } from 'framer-motion';

const Home = () => {
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
			<img
				className="logo"
				src={homelogo}
				alt="homelogo"
				style={{ margin: '0 auto' }}
			/>
			<nav>
				<ul className="navbar">
					<li className="nav-item">
						<button className="btn">New Life</button>
					</li>
					<li className="nav-item">
						<button className="btn">Continue Life</button>
					</li>
					<li className="nav-item">
						<button className="btn">Past Lives</button>
					</li>
					<li className="nav-item">
						<button className="btn">Settings</button>
					</li>
					<li className="nav-item">
						<Link to="../info">
							<button className="btn">Information</button>
						</Link>
					</li>
				</ul>
			</nav>
		</motion.div>
	);
};

export default Home;
