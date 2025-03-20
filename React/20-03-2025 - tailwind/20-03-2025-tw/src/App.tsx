import { DarkThemeToggle, Button } from "flowbite-react";
import { GiAxeInStump } from "react-icons/gi";

function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-2 bg-sky-200 dark:bg-slate-700">
      <h1 className="my-title">Hello</h1>
      <div className="ball" />
      <DarkThemeToggle />
      <Button gradientDuoTone="greenToBlue">Green to Blue</Button>
      <GiAxeInStump className="text-4xl text-red-500" />
    </div>
  );
}

export default App;
