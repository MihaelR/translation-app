import "./App.css";
import { AvailableWords } from "./componenets/AvailableWords";
import { Translator } from "./componenets/Translator";

function App() {
  return (
    <div className="App">
      <Translator />
      <AvailableWords />
    </div>
  );
}

export default App;
