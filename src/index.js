import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import GameRoutes from './GameRoutes';
import data from './data/database';

const root = ReactDOM.createRoot(document.getElementById('root'));
const Game = () => {
	// const [bgImgURL, setBgImgURL] = useState(
	// ! this URL need to be updated in future to match the changing URL in Setting.js
	let bgImgURL = data.themePath[1];
	// );
	useEffect(() => {
		document.body.style.backgroundImage = `url(${bgImgURL}`;
	}, [bgImgURL]);
	return (
		<Router>
			<GameRoutes />
		</Router>
	);
};
root.render(
	<React.StrictMode>
		<Game />
	</React.StrictMode>
);
