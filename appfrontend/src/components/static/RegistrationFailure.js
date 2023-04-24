import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Backdrop from '@material-ui/core/Backdrop';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import Link from '@material-ui/core/Link';
import '../../css/NewUser.css';

const RegistrationFailure = ({ isAuthenticated }) => {
	const navigate = useNavigate();

	useEffect(() => {
		if (isAuthenticated) {
			navigate('/');
		}
	}, [isAuthenticated, navigate]);

	useEffect(() => {
		setTimeout(() => {
			navigate('/new-user');
		}, 4000);
	}, [navigate]);

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
							Registration Failed!
						</Typography>
						<CancelOutlinedIcon
							style={{ paddingTop: 40, fontSize: 200, color: '#2D323F' }}
							aria-label='success tick'
						/>
						<p style={{ paddingBottom: '0' }}>
							Please try to register again after some time. Redirecting to
							registration page.
						</p>
						<p style={{ fontSize: 12, padding: 0 }}>
							Please{' '}
							<Link className='ModalLink' href='/new-user'>
								click here
							</Link>{' '}
							if you're not redirected automatically.
						</p>
						<p style={{ fontSize: 12, padding: '0' }}>
							Contact us if the issue persists.
						</p>
					</center>
				</Paper>
			</Backdrop>
		</div>
	);
};

export default RegistrationFailure;
