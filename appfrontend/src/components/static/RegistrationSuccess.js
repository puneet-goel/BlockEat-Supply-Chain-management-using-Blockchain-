import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Backdrop from '@material-ui/core/Backdrop';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import Link from '@material-ui/core/Link';
import '../../css/NewUser.css';

const RegistrationSuccess = ({ isAuthenticated }) => {
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		if (isAuthenticated) {
			navigate('/');
		}
	}, [isAuthenticated, navigate]);

	//Sends out registration status to the redirected home page.
	useEffect(() => {
		setTimeout(() => {
			navigate('/', {
				state: {
					auth: true,
					userType: location.state.userType,
				},
			});
		}, 4000);
	}, [location.state.userType, navigate]);

	return (
		<div className='new-user-body'>
			<Backdrop open className='backdrop-design'>
				<Paper elevation={0} className='new-user-paper'>
					<center>
						<Typography
							style={{ paddingTop: 30, fontWeight: '500' }}
							component='h1'
							variant='h5'
						>
							Successfully Registered!
						</Typography>
						<CheckCircleOutlineOutlinedIcon
							style={{ paddingTop: 40, fontSize: 200, color: '#2D323F' }}
							aria-label='success tick'
						/>
						<p style={{ paddingBottom: '0' }}>Redirecting to home page.</p>
						<p style={{ fontSize: 12, paddingTop: 0 }}>
							Please{' '}
							<Link className='ModalLink' href='/'>
								click here
							</Link>{' '}
							if you're not redirected automatically.
						</p>
					</center>
				</Paper>
			</Backdrop>
		</div>
	);
};

export default RegistrationSuccess;
