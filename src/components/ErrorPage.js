import React from 'react';
import './ErrorPage.css';

const ErrorPage = (props) => {
	const onClick = () => {
		props.fetchAgain();
	};

	return (
		<div className="Error-container">
			<div> There was an error</div>
			<button onClick={onClick} className="text-focus-in skew-button">
				<span>Try Again</span>
			</button>
		</div>
	);
};

export default ErrorPage;
