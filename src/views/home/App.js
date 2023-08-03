import logo from "../../assets/images/logo.svg";
import "./App.css";

function App() {
	return (
		<div className="app">
			<div>
				<img src={logo} className="app__logo" alt="logo" />
			</div>
			<div className="app__row">
				<h2 className="app__row_title">{process.env.REACT_APP_NAME}</h2>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</div>
		</div>
	);
}

export default App;
