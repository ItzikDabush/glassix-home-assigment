import React from 'react';
import Loader from 'react-loader-spinner';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './LoadingPage.css';

const LoadingPage = () => {
	return (
		<div className="LoadingPage-loader-container">
			<Loader type="Audio" color="#00BFFF" height={100} width={100} />
			<div className="loading-text">Loading</div>
		</div>
	);
};

export default LoadingPage;
