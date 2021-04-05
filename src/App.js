import logo from "./logo.svg";
import "./App.css";
import QRcode from "./components/QRcode";

function App() {
  function handleClick(e) {
    e.preventDefault();
    console.log(e);
  }

  return (
    <div className="App">
      <QRcode />
      {/* <header className="App-header" onClick={(e) => handleClick(e)}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
