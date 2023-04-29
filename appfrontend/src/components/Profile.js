import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import { USER_TYPES } from './enum/UsersEnum';
import '../css/Profile.css';

export default ({
	drizzle,
	drizzleState,
	userType,
	close,
	open,
	anchorEl,
	profilePicturePath,
}) => {
	const [data, setData] = useState({
		name: '',
		location: '',
	});

	const contract = drizzle.contracts.SupplyChainLifecycle;

	useEffect(() => {
		let method = null;
		switch (userType) {
			case USER_TYPES[0]:
				method = contract.methods['getProducer'];
				break;
			case USER_TYPES[1]:
				method = contract.methods['getDistributor'];
				break;
			case USER_TYPES[2]:
				method = contract.methods['getRetailer'];
				break;
			case USER_TYPES[3]:
				method = contract.methods['getConsumer'];
				break;
			default:
				break;
		}

		method()
			.call()
			.then((res) =>
				setData({
					name: res.name,
					location: res.location,
				})
			)
			.catch((err) => console.log(err));
	}, [userType, contract.methods]);

	return (
		<Menu
			className='profile-menu'
			anchorEl={anchorEl}
			keepMounted
			disableScrollLock={true}
			PaperProps={{
				style: {
					transform: 'translateX(-10px) translateY(60px)',
					padding: '10px 30px 20px 30px',
				},
			}}
			open={open}
			onClose={close}
		>
			<div>
				<center>
					<img
						className='profile-picture'
						src={profilePicturePath}
						alt='profile'
					/>
					<br />
					<Button
						variant='outlined'
						style={{ color: '#03989E', borderColor: '#03989E' }}
						disabled={true}
					>
						{userType}
					</Button>
				</center>
				<br />
				<div className='profile-details'>
					<div style={{ paddingBottom: '24px' }}>
						<h4>Name:</h4>
						<p>{data.name}</p>
					</div>
					<div style={{ paddingBottom: '24px' }}>
						<h4>Account Address</h4>
						<p>{drizzleState.accounts[0]}</p>
					</div>
					<div style={{ paddingBottom: '24px' }}>
						<h4>Location:</h4>
						<p>{data.location}</p>
					</div>
					<div>
						<h4>Account Balance</h4>
						<p>
							{drizzleState.accountBalances[drizzleState.accounts[0]]}{' '}
							<b>wei</b>
						</p>
					</div>
				</div>
			</div>
		</Menu>
	);
};
