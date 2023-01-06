import logo from "./logo.svg";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Hello</h2>
        <Weather city="Kyiv" />
      </header>
    </div>
  );
}

export default App;
