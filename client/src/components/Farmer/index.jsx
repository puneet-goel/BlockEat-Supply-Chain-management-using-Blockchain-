import { useState } from 'react';
import useEth from '../../contexts/EthContext/useEth';

const Farmer = () => {
	const {
		state: { contract, accounts },
	} = useEth();

	const [data, setData] = useState({
		name: '',
		quantity: '',
		price: '',
	});

	const handleChange = (e) => {
		e.preventDefault();
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};

	const handleLogin = async (e) => {
		e.preventDefault();

		const x = await contract.methods
			.addProduct(data.name, parseInt(data.quantity), parseInt(data.price))
			.call({ from: accounts[0] });

		console.log(x);
	};

	return (
		<div>
			<div>
				<h1>Add details</h1>
				<form onSubmit={handleLogin}>
					<div className='input_floating_label'>
						<input
							className='input'
							onChange={handleChange}
							value={data.name}
							type='text'
							required
							name='name'
						/>
						<label>Name</label>
					</div>

					<div className='input_floating_label'>
						<input
							className='input'
							onChange={handleChange}
							value={data.price}
							name='price'
							required
							type='number'
						/>
						<label>Price</label>
					</div>

					<div className='input_floating_label'>
						<input
							className='input'
							onChange={handleChange}
							value={data.quantity}
							name='quantity'
							required
							type='number'
						/>
						<label>Quantity</label>
					</div>
					<button type='submit' className='button'>
						Add product
					</button>
				</form>
			</div>
		</div>
	);
};

export default Farmer;
