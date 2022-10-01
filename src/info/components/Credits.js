import React from 'react';
import { credits, creditsKeys } from '../../data/credits';

const Credits = () => {
	return (
		<section className="container-credits">
			<h3>Credit</h3>
			<div className="container-credit">
				{creditsKeys.map((creditFor) => (
					<CreditDisplay
						creditFor={creditFor}
						creditArray={credits[creditFor]}
					/>
				))}
			</div>
		</section>
	);
};

// display block for each credit
const CreditDisplay = ({ creditFor, creditArray }) => {
	return (
		<article>
			<h4>{creditFor}</h4>
			<div>
				{creditArray.map((credit) => (
					<span>
						{credit.name} by {credit.author + '\n'}
					</span>
				))}
			</div>
		</article>
	);
};
export default Credits;
