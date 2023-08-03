import logo from "./logo.svg";
import "./App.css";

function App() {
	return (
		<div className="App">
			<div>
				<img src={logo} className="App-logo" alt="logo" />
				<div>{process.env.REACT_APP_NAME}</div>
			</div>
			<div>
				1.
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
