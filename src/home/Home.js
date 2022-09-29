import React from 'react';
import { Link } from 'react-router-dom';
import homelogo from '../assets/img/homelogo.png';
import './Home.css';

const Home = () => {
	return (
		<>
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
		</>
	);
};

export default Home;
