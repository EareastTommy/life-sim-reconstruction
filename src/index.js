import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';
import './index.css';
import Home from './home/Home';
// ? Loading and NotFound will be applied when data will be fetched from the server in future
// import Loading from './Loading';
// import NotFount from './NotFound';
import Main from './main/Main';
import Info from './info/Info';
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
		<div className="container-global">
			<Router>
				<Routes>
					<Route path="/" element={<Navigate to="/home" replace />} />
					{/* home page */}
					<Route path="/home" element={<Home />} />
					{/* life */}
					<Route path="/life/:name" element={<Main />} />
					{/* info */}
					<Route path="/info" element={<Info />} />
					{/* <Route path="*" element={<NotFound />} /> */}
				</Routes>
			</Router>
		</div>
	);
};
root.render(
	<React.StrictMode>
		<Game />
	</React.StrictMode>
);
