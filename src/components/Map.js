import React, { useState } from 'react';
import { getGoogleMapUrl } from '../config';
import Loader from 'react-loader-spinner';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './Map.css';

const Map = ({ query }) => {
	const googleUrl = getGoogleMapUrl(query);
	const [ isVisible, setIsVisile ] = useState(true);

	const onLoadHandler = () => {
		setTimeout(() => {
			setIsVisile(false);
		}, 1000);
	};

	return (
		<div className="Map-container">
			<div className="Map-loader-container">
				<Loader type="Bars" color="#00BFFF" height={100} width={100} visible={isVisible} />
			</div>
			<iframe
				title="uniique"
				width="100%"
				height="100%"
				frameBorder="200"
				style={{ border: 500 }}
				src={googleUrl}
				allowFullScreen
				onLoad={onLoadHandler}
			/>
		</div>
	);
};

export default Map;
