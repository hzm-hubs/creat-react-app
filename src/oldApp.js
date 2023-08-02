import logo from "./logo.svg";
import "./App.css";

function alert1() {
  alert("点击事件1");
}
function alert2() {
  console.log(`当前时间${new Date().toLocaleDateString()}`);
}
function App() {
  console.log(alert1, " 调取函数");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" onClick={alert2} />
        <p onClick={alert1}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <head>
          <base href="https://reactjs.org" />
        </head>
        <em>React</em>
        <strong>React</strong>
        <dfn>React</dfn>
        <code>
          React <var>react</var>
        </code>
        <tt>React Org</tt>
        <i>React</i>
        <samp>React</samp>
        <cite>React</cite>

        <p>
          love <sub>React</sub> <sup>Org</sup>
          <strike>今天会不一样</strike>
          <small>哪里不一样</small>
          <ins>都不一样</ins>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
