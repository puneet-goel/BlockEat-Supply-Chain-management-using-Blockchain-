import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Backdrop from '@material-ui/core/Backdrop';
import LockIcon from '@material-ui/icons/Lock';
import '../../css/NewUser.css';

const NewUser = ({ isAuthenticated }) => {
	const navigate = useNavigate();

	useEffect(() => {
		if (isAuthenticated) {
			navigate('/');
		}
	}, [isAuthenticated, navigate]);

	return (
		<div className='new-user-body'>
			<Backdrop open className='backdrop-design'>
				<Paper elevation={0} className='new-user-paper'>
					<center>
						<LockIcon
							fontSize='large'
							aria-label='back'
							style={{ fontSize: 50 }}
						/>
					</center>
					<center>
						<br />
						<Typography
							component='h1'
							variant='h5'
							style={{ fontWeight: '500' }}
						>
							New Here?
						</Typography>
						<p>
							We noticed the address you're currently using is not registered
							with us. Please switch to an existing user address or register
							this address to use this application.
						</p>
						<Button
							style={{ width: 200, marginBottom: 30 }}
							variant='contained'
							color='primary'
							className='nf-button'
							onClick={() => navigate('/register')}
						>
							I'd like to register
						</Button>
					</center>
				</Paper>
			</Backdrop>
		</div>
	);
};

export default NewUser;
