export const getGoogleMapUrl = (query) => {
	const baseUrl = 'https://www.google.com/maps/embed/v1/place';
	const key = 'AIzaSyCdQymwSuF0P6Ee-ffX0ZtWjpJdpaT5eLk';
	return `${baseUrl}?key=${key}&q=${query}`;
};

export const IPDataUrl = 'https://api.ipdata.co?api-key=dcb19aafdd3accd0ca61b014f91a6cc5888d57f4f703a9758da3751e';
