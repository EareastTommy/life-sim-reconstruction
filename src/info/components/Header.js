import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ title }) => {
	return (
		<header className="header">
			<h2 style={{ textAlign: 'center', flexGrow: '2' }}>{title}</h2>
			<Link to="/">
				<button className="btn" style={{ marginRight: '0.4vw' }}>
					Return Home
				</button>
			</Link>
		</header>
	);
};

export default Header;
