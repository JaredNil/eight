import React from 'react';
import './App.css';
import Gratulation from './components/gratulation/Gratulation';
import Loader from './components/Loader';

function App() {

	const [loading, setLoading] = React.useState(false);

	React.useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 400);
	}, []);


	return (
		<>
			{(loading)
				? <Loader />

				: <Gratulation />
			}
		</>
	)
}

export default App;

