import './App.css';
import Table from './components/table/Table.jsx'
import Backgrnd from './png/background.gif'
import Popup from './components/popup/Popup';

function App() {
	return (
		<div className="gratulation">
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
	);
}

export default App;

