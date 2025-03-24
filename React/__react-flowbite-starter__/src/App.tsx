import { DarkThemeToggle } from "flowbite-react";

function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-2 bg-sky-200 dark:bg-slate-700">
      <h1 className="text-4xl text-sky-900 dark:text-slate-100">
        Hello, world!
      </h1>
      <DarkThemeToggle />
    </div>
  );
}

export default App;
