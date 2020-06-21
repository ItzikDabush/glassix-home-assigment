import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Map from './components/Map';
import Details from './components/Details';
import LoadingPage from './components/LoadingPage';
import ErrorPage from './components/ErrorPage';
import { IPDataUrl } from './config';

import './App.css';

function App() {
	const [ isLoaded, setIsLoaded ] = useState(false);
	const [ errorFetching, setErrorFetching ] = useState(false);
	const [ ipData, setIpData ] = useState({});
	const fetchIPData = async () => {
		axios.get(IPDataUrl).then(
			(result) => {
				setIpData(result.data);
				setTimeout(() => {
					setIsLoaded(true);
				}, 400)
			},
			(error) => {
				setIsLoaded(true);
				setErrorFetching(true);
			}
		);
	};

	useEffect(() => {	
		fetchIPData();
	}, []);
	return (
		<div className="App-container">	
			{!isLoaded
			 ? <LoadingPage />
			 : !errorFetching && isLoaded
			 ? 
			 <>
			 <span className="App-text">Glassix - Home Assigment - Itzik Dabush</span>
				<Details {...ipData} />
				<Map query={ipData.city} />
			 </>
			 :
			 <ErrorPage name='hello' fetchAgain={fetchIPData}/>
			}
		</div>
	);
}

export default App;
