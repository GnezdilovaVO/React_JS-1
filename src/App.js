import logo from "./logo.svg";
import "./App.css";
import Message from "./Components/Message";

function App() {
  return (
    <div className="App">
      <Message text="Message1" />
      <Message text="Message2" />
      <Message text="Message3" />
    </div>
  );
}

export default App;
