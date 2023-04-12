import Simpsons from "./components/Simpsons/Simpsons";
import Characters from "./components/characters/Characters";

function App() {
  return (
    <div className="App">
      {<Simpsons/>}
        {
            <Characters/>
        }
    </div>
  );
}

export default App;
