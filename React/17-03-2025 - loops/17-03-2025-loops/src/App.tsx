import Father from "./components/Father";
import RandomNum from "./components/RandomNum";

function App() {
  return (
    <>
      <Father />
      <RandomNum min={1} max={100} />
      <RandomNum min={20} max={30} />
      <RandomNum min={11} max={45} />
      <RandomNum min={90} max={200} />
    </>
  );
}

export default App;
