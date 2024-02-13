import React from "react";
import Greetings from "./Greetings";
import "./App.css";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Greetings firstName="Feba" />
      </div>
    );
  }
}

export default App;
