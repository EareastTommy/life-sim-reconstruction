import React, { useState } from 'react';
import guides from '../../data/guides';

const Guides = () => {
	const [currentReadingId, setCurrentReadingId] = useState('int');
	const clickGuideLink = (guideId) => {
		setCurrentReadingId(guideId);
	};
	return (
		// ! container-guides != container-guide (just in case you didn't notice)
		<section className="container-guides">
			<GuidesNavbar
				clickGuideLink={clickGuideLink}
				currentReadingId={currentReadingId}
			/>
			<GuideDisplay currentReadingId={currentReadingId} />
		</section>
	);
};

// navigation bar for guides
const GuidesNavbar = ({ clickGuideLink, currentReadingId }) => {
	return (
		<nav>
			<ul className="navbar-guide">
				{guides.map((guide) => {
					return (
						<li key={guide.title}>
							<button
								className="btn-guide"
								onClick={(e) => clickGuideLink(guide.id)}
								style={
									currentReadingId === guide.id
										? { backgroundColor: 'var(--black-75)' }
										: {}
								}
							>
								{guide.title}
							</button>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

// display area for guide
const GuideDisplay = ({ currentReadingId }) => {
	const [currentDisplaying] = guides.filter(
		(guide) => guide.id === currentReadingId
	);
	return (
		// ! container-guides != container-guide (just in case you didn't notice)
		<article className="container-guide">
			{currentDisplaying ? (
				<p>{currentDisplaying.content}</p>
			) : (
				<h1 style={{ color: 'red' }}>
					An error has occurred, please contact our Life Simulators developer
				</h1>
			)}
		</article>
	);
};

export default Guides;
