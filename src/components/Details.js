import React from 'react';
import './Details.css';

const Details = (props) => {
	return (
		<div className="Detailes-container">
			<div className="text-focus-in skew-button">
				<span>Your IP is: {props.ip}</span>
			</div>
			<div className="text-focus-in skew-button">
				<span>Your City is: {props.city}</span>
			</div>
			<div className="text-focus-in skew-button">
				<span>Your Region is: {props.region}</span>
			</div>
			<div className="text-focus-in skew-button">
				<span>
					Your Are In {props.country_name} {props.emoji_flag}
				</span>
			</div>
		</div>
	);
};

export default Details;
