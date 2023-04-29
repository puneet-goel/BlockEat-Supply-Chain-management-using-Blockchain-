import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Backdrop from '@material-ui/core/Backdrop';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { CircularPageLoader } from './static/CircularPageLoader';
import { USER_TYPES } from './enum/UsersEnum';
import '../css/NewUser.css';

const ConfirmRegistration = ({ drizzle, drizzleState, isAuthenticated }) => {
	const [showLoader, setShowLoader] = useState();
	const [data, setData] = useState({
		name: drizzleState.accounts[0],
		location: 'India',
	});

	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		if (isAuthenticated) {
			navigate('/');
		}
	}, [isAuthenticated, navigate]);

	function getContractMethod() {
		let method = null;
		switch (location.state.type) {
			case USER_TYPES[0]:
				method = drizzle.contracts.SupplyChainLifecycle.methods['addProducer'];
				break;
			case USER_TYPES[1]:
				method =
					drizzle.contracts.SupplyChainLifecycle.methods['addDistributor'];
				break;
			case USER_TYPES[2]:
				method = drizzle.contracts.SupplyChainLifecycle.methods['addRetailer'];
				break;
			case USER_TYPES[3]:
				method = drizzle.contracts.SupplyChainLifecycle.methods['addConsumer'];
				break;
			default:
				break;
		}
		return method;
	}

	const addNewUser = (e) => {
		e.preventDefault();
		setShowLoader(true);
		const contractMethod = getContractMethod();
		contractMethod(drizzleState.accounts[0], `${data.name}`, data.location)
			.send({
				from: drizzleState.accounts[0],
				gas: 1000000,
			})
			.then((receipt) => {
				console.log(receipt);
				setShowLoader(false);
				navigate('/registration-success', {
					state: {
						userType: location.state.type,
					},
				});
			})
			.catch((error) => {
				console.log(error);
				setShowLoader(false);
				navigate('/registration-failure');
			});
	};

	return (
		<div className='new-user-body'>
			<Backdrop open className='backdrop-design'>
				<Paper elevation={0} className='new-user-paper'>
					<IconButton color='inherit'>
						<ArrowBackIosIcon
							fontSize='large'
							aria-label='back'
							onClick={() => navigate(-1)}
						/>
					</IconButton>
					<center>
						<Typography
							component='h1'
							variant='h5'
							style={{ fontWeight: '500' }}
						>
							Confirm registration as '
							{location.state ? location.state.type : null}'?
						</Typography>
						<p>
							By clicking on confirm, you agree to our terms and conditions as
							well. <br />
							Please read our terms and conditions here.
						</p>
						<form onSubmit={addNewUser} className='form-grid'>
							<Grid
								container
								color='secondary'
								justifyContent='center'
								direction={'column'}
								spacing={2}
							>
								<Grid item xs={12} style={{ color: 'red' }}>
									<TextField
										required
										fullWidth
										name='username'
										value={data.name}
										onChange={(event) =>
											setData({ ...data, name: event.target.value })
										}
										variant='outlined'
										label='Name'
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										required
										fullWidth
										multiline
										value={data.location}
										name='location'
										onChange={(event) =>
											setData({ ...data, location: event.target.value })
										}
										variant='outlined'
										label='Location'
									/>
								</Grid>
							</Grid>
							<Button
								style={{ width: 200, marginTop: 20, marginBottom: 30 }}
								variant='contained'
								color='primary'
								className='confirm-button'
								type='submit'
							>
								Confirm
							</Button>
						</form>
					</center>
				</Paper>
			</Backdrop>
			<CircularPageLoader open={showLoader} />
		</div>
	);
};

export default ConfirmRegistration;
