import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from './home/Home';
// ? Loading and NotFound will be applied when data will be fetched from the server in future
// import Loading from './Loading';
// import NotFount from './NotFound';
import Main from './main/Main';
import Info from './info/Info';
import { AnimatePresence } from 'framer-motion';

const GameRoutes = () => {
	const location = useLocation();

	return (
		<AnimatePresence>
			<Routes location={location} key={location.pathname}>
				{/* home page */}
				<Route path="/" element={<Home />} />
				{/* life */}
				<Route path="/life/:name" element={<Main />} />
				{/* info */}
				<Route path="/info" element={<Info />} />
				{/* for all other path, including invalid path such as http://yourdomain/invalid-path */}
				<Route path="/*" element={<Navigate to="/home" replace />} />
			</Routes>
		</AnimatePresence>
	);
};

export default GameRoutes;
