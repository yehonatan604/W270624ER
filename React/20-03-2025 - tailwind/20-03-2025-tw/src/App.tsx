import { DarkThemeToggle, Button } from "flowbite-react";
import { GiAxeInStump } from "react-icons/gi";
import "./ofek.css";
import { paragarphes } from "./data/paragraphs";
import Title from "./components/Title";
import Par from "./components/Par";

function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-2 bg-sky-200 dark:bg-slate-700">
      <h1 className="my-title">Hello</h1>
      <div className="ball" />
      <DarkThemeToggle />
      <Button gradientDuoTone="greenToBlue">Green to Blue</Button>
      <GiAxeInStump className="text-4xl text-red-500" />

      {paragarphes.map((par, i) => {
        return (
          <div
            key={i}
            className="my-4 flex h-2/3 w-1/2 flex-col items-center gap-4"
          >
            <Title title={par.title} color={par.titleColor} />
            <Par color={par.paragraphColor} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
