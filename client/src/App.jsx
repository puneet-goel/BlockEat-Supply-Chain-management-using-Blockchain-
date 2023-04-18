import { EthProvider } from './contexts/EthContext';
import Intro from './components/Intro/';
import Setup from './components/Setup';
import Demo from './components/Demo';
import Farmer from './components/Farmer';
import Footer from './components/Footer';

function App() {
	return (
		<EthProvider>
			<div id='App'>
				<div className='container'>
					{/* <Intro />
					<hr />
					<Setup />
					<hr />
					<Demo />
					<hr /> */}
					<Farmer />
					{/* <hr />
					<Footer /> */}
				</div>
			</div>
		</EthProvider>
	);
}

export default App;

