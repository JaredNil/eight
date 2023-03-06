import React from 'react';
import './App.css';
import Table from './components/table/Table.jsx'
import Backgrnd from './png/background.gif'
import Popup from './components/popup/Popup';

function App() {
	const [loading, setLoading] = React.useState(false);

	React.useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 300);
	}, []);

	return (
		<>
			{(loading) ?
				<div className="loader">
					<div className="loader-inner">
						<div className="loader-line-wrap">
							<div className="loader-line"></div>
						</div>
						<div className="loader-line-wrap">
							<div className="loader-line"></div>
						</div>
						<div className="loader-line-wrap">
							<div className="loader-line"></div>
						</div>
						<div className="loader-line-wrap">
							<div className="loader-line"></div>
						</div>
						<div className="loader-line-wrap">
							<div className="loader-line"></div>
						</div>
					</div>
				</div>
				: <div className="gratulation">
					<div className="gratulation__wrapper">
						<div className="gratulation__background">
							<img src={Backgrnd} className="gratulation__background-img" alt="#" />
						</div>
						<div className="gratulation__table">
							<Table />
						</div>
					</div>
					<Popup text={'b'} />
					<Popup text={'s'} />
					<Popup text={'l'} />
				</div>
			}



		</>
	);
}

export default App;

