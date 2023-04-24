import React from 'react';
import { useLocation } from 'react-router-dom';
import Home from '../Home';

const HomeWrapper = (props) => {
	//Checks for registration status received through navigate() right after
	//new user's successful registration.
	const location = useLocation();

	if (location.state != null && location.state.auth != null) {
		return (
			<Home
				isSuccessfullyRegistered={location.state.auth}
				newUserType={location.state.userType}
				{...props}
			/>
		);
	}
	return (
		<Home
			isSuccessfullyRegistered={null}
			newUserType={props.userType}
			{...props}
		/>
	);
};

export default HomeWrapper;
